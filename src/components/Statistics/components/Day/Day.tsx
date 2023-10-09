import { useMemo, useState } from 'react'
import TimeRangeSelector from '../TimeRangeSelector/TimeRangeSelector'
import ViewByTime from '../ViewByTime/ViewByTime'
import { useAppStore } from '@/store'
import { filterByRange } from '../../tools'
import { AVERAGE_CONSUMPTION } from '@/tools'

const Day = () => {
  const [date, setDate] = useState(new Date())

  const handlePrevPress = () => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() - 1)

    setDate(newDate)
  }

  const handleNextPress = () => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() + 1)

    setDate(newDate)
  }

  const consumptionHistory = useAppStore(store => store.consumptionHistory)

  const { consumption, consumptionByAverage } = useMemo(() => {
    let consumption = 0

    const thisDay = filterByRange(consumptionHistory, date, date)[0]
    if (thisDay !== undefined) consumption = thisDay.consumption

    const consumptionByAverage =
      consumption < AVERAGE_CONSUMPTION
        ? {
            value: AVERAGE_CONSUMPTION - consumption,
            desc: 'Menos que el promedio',
          }
        : {
            value: consumption - AVERAGE_CONSUMPTION,
            desc: 'Más que el promedio',
          }

    return { consumption, consumptionByAverage }
  }, [consumptionHistory, date])

  return (
    <ViewByTime extraInfo={[{ value: consumption }, consumptionByAverage]}>
      <TimeRangeSelector
        range={date.toLocaleDateString()}
        handlePrevPress={handlePrevPress}
        handleNextPress={handleNextPress}
      />
    </ViewByTime>
  )
}

export default Day
