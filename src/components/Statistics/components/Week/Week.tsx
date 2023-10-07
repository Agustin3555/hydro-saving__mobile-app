import { useState } from 'react'
import TimeRangeSelector from '../TimeRangeSelector/TimeRangeSelector'
import ViewByTime from '../ViewByTime/ViewByTime'

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

  return (
    <ViewByTime
      component={
        <TimeRangeSelector
          range={`${startOfWeek.toLocaleDateString()}  -  ${endOfWeek.toLocaleDateString()}`}
          handlePrevPress={handlePrevPress}
          handleNextPress={handleNextPress}
        />
      }
    />
  )
}

export default Week
