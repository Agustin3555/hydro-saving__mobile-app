import { useState } from 'react'
import TimeRangeSelector from '../TimeRangeSelector/TimeRangeSelector'
import ViewByTime from '../ViewByTime/ViewByTime'

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

  return (
    <ViewByTime
      component={
        <TimeRangeSelector
          range={`${startOfMonth.toLocaleDateString()} - ${endOfMonth.toLocaleDateString()}`}
          handlePrevPress={handlePrevPress}
          handleNextPress={handleNextPress}
        />
      }
    />
  )
}

export default Month
