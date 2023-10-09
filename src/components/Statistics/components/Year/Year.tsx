import { useMemo, useState } from 'react'
import TimeRangeSelector from '../TimeRangeSelector/TimeRangeSelector'
import ViewByTime from '../ViewByTime/ViewByTime'
import { useAppStore } from '@/store'
import { filterByRange } from '../../tools'
import { AVERAGE_CONSUMPTION } from '@/tools'
import ConsumptionChart from '../ConsumptionChart/ConsumptionChart'

const MONTHS = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

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

  const values = useMemo(() => {
    const consumptionByMonth = MONTHS.map(month => {
      const monthIndex = MONTHS.indexOf(month)
      const monthStart = new Date(startOfYear.getFullYear(), monthIndex, 1)
      const monthEnd = new Date(startOfYear.getFullYear(), monthIndex + 1, 0)

      const consumptionThisMonth = filterByRange(
        consumptionHistory,
        monthStart,
        monthEnd
      )

      const totalConsumption = consumptionThisMonth.reduce(
        (total, item) => total + item.consumption,
        0
      )

      return {
        ref: month,
        consumption: totalConsumption,
      }
    })

    return consumptionByMonth
  }, [consumptionHistory, startOfYear])

  const { consumption, consumptionByAverage } = useMemo(() => {
    let consumption = 0

    const thisYear = filterByRange(consumptionHistory, startOfYear, endOfYear)
    if (thisYear !== undefined)
      consumption = thisYear.reduce((total, item) => total + item.consumption, 0)

    const yearAverage = AVERAGE_CONSUMPTION * 365

    const consumptionByAverage =
      consumption < yearAverage
        ? {
            value: yearAverage - consumption,
            desc: 'Menos que el promedio',
          }
        : {
            value: consumption - yearAverage,
            desc: 'Más que el promedio',
          }

    return { consumption, consumptionByAverage }
  }, [consumptionHistory, startOfYear, endOfYear])

  return (
    <ViewByTime extraInfo={[{ value: consumption }, consumptionByAverage]}>
      <TimeRangeSelector
        range={startOfYear.getFullYear().toString()}
        handlePrevPress={handlePrevPress}
        handleNextPress={handleNextPress}
      />
      <ConsumptionChart maxConsumption={15000 * 30} values={values} />
    </ViewByTime>
  )
}

export default Year
