import { Text } from 'react-native'
import Section from '../Section/Section'
import { SECTIONS } from '@/store'

const UserSettings = () => {
  return (
    <Section sectionKey={SECTIONS.userSettings}>
      <Text>UserSettings</Text>
    </Section>
  )
}

export default UserSettings
