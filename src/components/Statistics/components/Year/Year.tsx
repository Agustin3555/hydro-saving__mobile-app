import { useMemo, useState } from 'react'
import TimeRangeSelector from '../TimeRangeSelector/TimeRangeSelector'
import ViewByTime from '../ViewByTime/ViewByTime'
import { useAppStore } from '@/store'
import { filterByRange } from '../../tools'

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

const Year = () => {
  const [startOfYear, setStartOfYear] = useState(() => {
    const now = new Date()
    const firstDayOfYear = new Date(now.getFullYear(), 0, 1)

    return firstDayOfYear
  })

  const [endOfYear, setEndOfYear] = useState(() => {
    const now = new Date()
    const lastDayOfYear = new Date(now.getFullYear(), 11, 31)

    return lastDayOfYear
  })

  const handlePrevPress = () => {
    const newStartOfYear = new Date(startOfYear)
    newStartOfYear.setFullYear(startOfYear.getFullYear() - 1)

    const newEndOfYear = new Date(newStartOfYear.getFullYear(), 11, 31)

    setStartOfYear(newStartOfYear)
    setEndOfYear(newEndOfYear)
  }

  const handleNextPress = () => {
    const newStartOfYear = new Date(startOfYear)
    newStartOfYear.setFullYear(startOfYear.getFullYear() + 1)

    const newEndOfYear = new Date(newStartOfYear.getFullYear(), 11, 31)

    setStartOfYear(newStartOfYear)
    setEndOfYear(newEndOfYear)
  }

  const consumptionHistory = useAppStore(store => store.consumptionHistory)

  // const values = useMemo(() => {
  //   const v = filterByRange(consumptionHistory, startOfMonth, endOfMonth)

  //   return v.map((item, index) => ({
  //     ref: (index + 1).toString(),
  //     // ref: item.date,
  //     consumption: item.consumption,
  //   }))
  // }, [consumptionHistory, startOfMonth, endOfMonth])

  return (
    <ViewByTime>
      <TimeRangeSelector
        range={startOfYear.getFullYear().toString()}
        handlePrevPress={handlePrevPress}
        handleNextPress={handleNextPress}
      />
    </ViewByTime>
  )
}

export default Year
