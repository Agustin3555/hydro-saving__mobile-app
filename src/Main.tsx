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
import { getTankData } from './services'

const Main = () => {
  const setTankData = useAppStore(store => store.setTankData)
  const accumulateConsumption = useAppStore(store => store.accumulateConsumption)
  const setDeviceConnection = useAppStore(store => store.setDeviceConnection)

  useEffect(() => {
    const interval = setInterval(async () => {
      const tankData = await getTankData()

      if (tankData) {
        setTankData(tankData)
        accumulateConsumption(tankData.flowRate)
        setDeviceConnection(true)
        return
      }

      setDeviceConnection(false)
    }, 1000)

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
