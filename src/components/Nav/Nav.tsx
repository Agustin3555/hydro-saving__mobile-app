import { View } from 'react-native'
import {
  faLightbulb,
  faUsers,
  faHouse,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons'
import { styles } from './Nav.styled'
import Tab from '../Tab/Tab'
import { SECTIONS } from '@/store'

const tabs = [
  { sectionKey: SECTIONS.statistics, faIcon: faChartPie },
  { sectionKey: SECTIONS.home, faIcon: faHouse },
  { sectionKey: SECTIONS.tips, faIcon: faLightbulb },
  { sectionKey: SECTIONS.forum, faIcon: faUsers },
]

const Nav = () => {
  return (
    <View style={styles.nav}>
      {tabs.map(item => (
        <Tab
          sectionKey={item.sectionKey}
          faIcon={item.faIcon}
          key={item.sectionKey}
        />
      ))}
    </View>
  )
}

export default Nav
