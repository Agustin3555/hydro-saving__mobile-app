import { View } from 'react-native'
import { GradientView, Nav } from './components'
import { StatusBar } from 'expo-status-bar'
import { styles } from './Main.styled'

const Main = () => {
  return (
    <>
      <StatusBar style="light" />
      <GradientView
        extendedStyle={{
          container: {},
        }}
      >
        <View style={styles.main} />
        <Nav />
      </GradientView>
    </>
  )
}

export default Main
