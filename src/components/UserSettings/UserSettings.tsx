import { Text, View } from 'react-native'
import Section from '../Section/Section'
import { SECTIONS, useAppStore } from '@/store'
import { styles } from './UserSettings.styled'

const UserSettings = () => {
  const { username } = useAppStore(store => store.generalData)

  return (
    <Section sectionKey={SECTIONS.userSettings}>
      <View style={styles.container}>
        <Text style={styles.text}>{username}</Text>
      </View>
    </Section>
  )
}

export default UserSettings
