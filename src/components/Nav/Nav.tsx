import { View } from 'react-native'
import {
  faLightbulb,
  faUsers,
  faHouse,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons'
import { styles } from './Nav.styled'
import { Icon } from '..'

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Icon faIcon={faChartPie} />
      <Icon faIcon={faHouse} />
      <Icon faIcon={faLightbulb} />
      <Icon faIcon={faUsers} />
    </View>
  )
}

export default Nav
