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

const Main = () => {
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
