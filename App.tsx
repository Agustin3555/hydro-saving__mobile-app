import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen'
import Main from './src/Main'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import { View } from 'react-native'

preventAutoHideAsync()

const App = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter/Inter-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <View onLayout={onLayoutRootView}>
      <Main />
    </View>
  )
}

export default App
