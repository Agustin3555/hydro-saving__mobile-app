import { useState } from 'react'
import TimeRangeSelector from '../TimeRangeSelector/TimeRangeSelector'
import ViewByTime from '../ViewByTime/ViewByTime'

const Day = () => {
  const [range, setRange] = useState(new Date())

  const handlePrevPress = () => {
    const newDate = new Date(range)
    newDate.setDate(range.getDate() - 1)

    setRange(newDate)
  }

  const handleNextPress = () => {
    const newDate = new Date(range)
    newDate.setDate(range.getDate() + 1)

    setRange(newDate)
  }

  return (
    <ViewByTime
      component={
        <TimeRangeSelector
          range={range.toLocaleDateString()}
          handlePrevPress={handlePrevPress}
          handleNextPress={handleNextPress}
        />
      }
    ></ViewByTime>
  )
}

export default Day
