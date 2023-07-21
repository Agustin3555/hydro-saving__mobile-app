import { Text, View } from 'react-native'
import { GradientView, Nav } from './components'
import { StatusBar } from 'expo-status-bar'
import { styles } from './Main.styled'
import { useAppStore } from './store'

const Main = () => {
  const currentSection = useAppStore(store => store.currentSection)

  return (
    <>
      <StatusBar style="light" />
      <GradientView
        extendedStyle={{
          container: {},
        }}
      >
        <Text>{currentSection}</Text>
        <View style={styles.main} />
        <Nav />
      </GradientView>
    </>
  )
}

export default Main
