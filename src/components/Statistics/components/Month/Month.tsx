import { useMemo, useState } from 'react'
import TimeRangeSelector from '../TimeRangeSelector/TimeRangeSelector'
import ViewByTime from '../ViewByTime/ViewByTime'
import ConsumptionChart from '../ConsumptionChart/ConsumptionChart'
import { filterByRange } from '../../tools'
import { useAppStore } from '@/store'

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

const Month = () => {
  const [startOfMonth, setStartOfMonth] = useState(() => {
    const now = new Date()
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    return firstDayOfMonth
  })

  const [endOfMonth, setEndOfMonth] = useState(() => {
    const now = new Date()
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)

    return lastDayOfMonth
  })

  const handlePrevPress = () => {
    const newStartOfMonth = new Date(startOfMonth)
    newStartOfMonth.setMonth(startOfMonth.getMonth() - 1)

    const newEndOfMonth = new Date(
      newStartOfMonth.getFullYear(),
      newStartOfMonth.getMonth() + 1,
      0
    )

    setStartOfMonth(newStartOfMonth)
    setEndOfMonth(newEndOfMonth)
  }

  const handleNextPress = () => {
    const newStartOfMonth = new Date(startOfMonth)
    newStartOfMonth.setMonth(startOfMonth.getMonth() + 1)

    const newEndOfMonth = new Date(
      newStartOfMonth.getFullYear(),
      newStartOfMonth.getMonth() + 1,
      0
    )

    setStartOfMonth(newStartOfMonth)
    setEndOfMonth(newEndOfMonth)
  }

  const consumptionHistory = useAppStore(store => store.consumptionHistory)

  const values = useMemo(() => {
    const v = filterByRange(consumptionHistory, startOfMonth, endOfMonth)

    return v.map((item, index) => ({
      ref: (index + 1).toString(),
      // ref: item.date,
      consumption: item.consumption,
    }))
  }, [consumptionHistory, startOfMonth, endOfMonth])

  return (
    <ViewByTime>
      <TimeRangeSelector
        range={`${MONTHS[startOfMonth.getMonth()]}  ${startOfMonth.getFullYear()}`}
        handlePrevPress={handlePrevPress}
        handleNextPress={handleNextPress}
      />
      <ConsumptionChart maxConsumption={15000} pattern={3} values={values} />
    </ViewByTime>
  )
}

export default Month
