import { Text } from 'react-native'
import Section from '../Section/Section'
import { SECTIONS } from '@/store'
import { resultVar2 } from '@/Ejercicios/Completar/var2N'

const Statistics = () => {
  return (
    <Section sectionKey={SECTIONS.statistics}>
      <Text style={{ color: 'white' }}>{resultVar2}</Text>
      <Text style={{ color: 'white', fontSize: 50 }}>
        Lorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem
        ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum
        dolor sit amLorem ipsum dolor sit am
      </Text>
    </Section>
  )
}

export default Statistics
