import { useCallback, useState } from 'react'

export const useToggle = (initState = false) => {
  const [state, setState] = useState<boolean>(initState)

  const toggle = useCallback(() => {
    setState(prevState => !prevState)
  }, [])

  return [state, toggle]
}
