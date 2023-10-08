import { useState } from 'react'
import TimeRangeSelector from '../TimeRangeSelector/TimeRangeSelector'
import ViewByTime from '../ViewByTime/ViewByTime'
import { useAppStore } from '@/store'

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

  return (
    <ViewByTime extraInfo={[{ value: 1 }]}>
      <TimeRangeSelector
        range={date.toLocaleDateString()}
        handlePrevPress={handlePrevPress}
        handleNextPress={handleNextPress}
      />
    </ViewByTime>
  )
}

export default Day
