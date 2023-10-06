import { View } from 'react-native'
import {
  UserSettings,
  GradientView,
  Home,
  Nav,
  Statistics,
  Tips,
} from './components'
import { StatusBar } from 'expo-status-bar'
import { styles } from './Main.styled'
import { useEffect } from 'react'
import { useAppStore } from './store'
import { getPersistedHistory, getTankData, updatePersistedHistory } from './services'

const Main = () => {
  const history = useAppStore(store => store.history)
  const setHistory = useAppStore(store => store.setHistory)
  const addToHistory = useAppStore(store => store.addToHistory)

  const { sensorDistance } = useAppStore(store => store.tankData)
  const setTankData = useAppStore(store => store.setTankData)

  // Cargar el historial si es que existe
  useEffect(() => {
    const asyncCallback = async () => {
      const persistedHistory = await getPersistedHistory()

      if (persistedHistory) {
        console.log(persistedHistory)
        setHistory(persistedHistory)
      }
    }

    asyncCallback()
  }, [])

  // Almacenar los datos actuales del tanque en el historial
  useEffect(() => {
    const interval = setInterval(async () => {
      addToHistory({ timestamp: Date.now(), sensorDistance })

      await updatePersistedHistory(history)
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  // Actualizar los datos actuales del tanque
  useEffect(() => {
    const interval = setInterval(async () => {
      const tankData = await getTankData()

      if (tankData) setTankData(tankData)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <StatusBar style="light" />
      <GradientView>
        <View style={styles.sections}>
          <Statistics />
          <Home />
          <Tips />
          <UserSettings />
        </View>
        <Nav />
      </GradientView>
    </>
  )
}

export default Main
