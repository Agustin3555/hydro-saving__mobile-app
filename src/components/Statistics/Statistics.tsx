import { Text } from 'react-native'
import Section from '../Section/Section'
import { SECTIONS } from '@/store'

const Statistics = () => {
  return (
    <Section sectionKey={SECTIONS.statistics}>
      <Text style={{ color: 'white', fontSize: 50 }}>
        Lorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem
        ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum
        dolor sit amLorem ipsum dolor sit am
      </Text>
    </Section>
  )
}

export default Statistics
