import { View } from 'react-native'
import {
  faLightbulb,
  faHouse,
  faChartPie,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons'
import { styles } from './Nav.styled'
import Tab from '../Tab/Tab'
import { SECTIONS } from '@/store'

const tabs = [
  { sectionKey: SECTIONS.statistics, faIcon: faChartPie, title: 'Estadísticas' },
  { sectionKey: SECTIONS.home, faIcon: faHouse, title: 'Home' },
  { sectionKey: SECTIONS.tips, faIcon: faLightbulb, title: 'Tips' },
  { sectionKey: SECTIONS.userSettings, faIcon: faUserGear, title: 'Ajustes' },
]

const Nav = () => {
  return (
    <View style={styles.nav}>
      {tabs.map(item => (
        <Tab {...item} key={item.sectionKey} />
      ))}
    </View>
  )
}

export default Nav
