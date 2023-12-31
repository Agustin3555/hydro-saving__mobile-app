import { useMemo, useState } from 'react'
import TimeRangeSelector from '../TimeRangeSelector/TimeRangeSelector'
import ViewByTime from '../ViewByTime/ViewByTime'
import ConsumptionChart from '../ConsumptionChart/ConsumptionChart'
import { useAppStore } from '@/store'
import { filterByRange } from '../../tools'
import { AVERAGE_CONSUMPTION } from '@/tools'

const DAYS = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']

const Week = () => {
  const [startOfWeek, setStartOfWeek] = useState(() => {
    const now = new Date()
    const firstDayOfWeek = new Date(now)
    firstDayOfWeek.setDate(now.getDate() - now.getDay()) // Primer día (Domingo)

    return firstDayOfWeek
  })

  const [endOfWeek, setEndOfWeek] = useState(() => {
    const now = new Date()
    const lastDayOfWeek = new Date(now)
    lastDayOfWeek.setDate(now.getDate() + (6 - now.getDay())) // Último día (Sábado)

    return lastDayOfWeek
  })

  const handlePrevPress = () => {
    const newStartOfWeek = new Date(startOfWeek)
    newStartOfWeek.setDate(startOfWeek.getDate() - 7)

    const newEndOfWeek = new Date(endOfWeek)
    newEndOfWeek.setDate(endOfWeek.getDate() - 7)

    setStartOfWeek(newStartOfWeek)
    setEndOfWeek(newEndOfWeek)
  }

  const handleNextPress = () => {
    const newStartOfWeek = new Date(startOfWeek)
    newStartOfWeek.setDate(startOfWeek.getDate() + 7)

    const newEndOfWeek = new Date(endOfWeek)
    newEndOfWeek.setDate(endOfWeek.getDate() + 7)

    setStartOfWeek(newStartOfWeek)
    setEndOfWeek(newEndOfWeek)
  }

  const consumptionHistory = useAppStore(store => store.consumptionHistory)

  const values = useMemo(() => {
    const v = filterByRange(consumptionHistory, startOfWeek, endOfWeek)

    return v.map((item, index) => ({
      ref: DAYS[index],
      // ref: item.date,
      consumption: item.consumption,
    }))
  }, [consumptionHistory, startOfWeek, endOfWeek])

  const { consumption, consumptionByAverage } = useMemo(() => {
    let consumption = 0

    const thisWeek = filterByRange(consumptionHistory, startOfWeek, endOfWeek)
    if (thisWeek !== undefined)
      consumption = thisWeek.reduce((total, item) => total + item.consumption, 0)

    const weekAverage = AVERAGE_CONSUMPTION * 7

    const consumptionByAverage =
      consumption < weekAverage
        ? {
            value: weekAverage - consumption,
            desc: 'Menos que el promedio',
          }
        : {
            value: consumption - weekAverage,
            desc: 'Más que el promedio',
          }

    return { consumption, consumptionByAverage }
  }, [consumptionHistory, startOfWeek, endOfWeek])

  return (
    <ViewByTime extraInfo={[{ value: consumption }, consumptionByAverage]}>
      <TimeRangeSelector
        range={`${startOfWeek.toLocaleDateString()}  -  ${endOfWeek.toLocaleDateString()}`}
        handlePrevPress={handlePrevPress}
        handleNextPress={handleNextPress}
      />
      <ConsumptionChart maxConsumption={15000} values={values} />
    </ViewByTime>
  )
}

export default Week
