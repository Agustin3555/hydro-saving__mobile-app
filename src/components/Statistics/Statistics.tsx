import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Section from '../Section/Section'
import { SECTIONS, useAppStore } from '@/store'
import { useState } from 'react'
import { styles } from './Statistics.styled'
import { COLOR } from '@/styles'
import { Day, Month, Week, Year } from './components'

enum VIEWS {
  day,
  week,
  month,
  year,
}

const viewsText = ['Día', 'Semana', 'Mes', 'Año']

const views = [<Day />, <Week />, <Month />, <Year />]

const Statistics = () => {
  const [viewCurrent, setViewCurrent] = useState(VIEWS.day)
  const consumptionHistory = useAppStore(store => store.consumptionHistory)

  const handlePress = (view: VIEWS) => () => {
    setViewCurrent(view)
  }

  return (
    <Section sectionKey={SECTIONS.statistics}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.viewSelector}>
          {viewsText.map((item, index) => (
            <TouchableOpacity
              style={[
                styles.button,
                index === viewCurrent && { backgroundColor: COLOR.g_2 },
              ]}
              key={index}
              activeOpacity={0.75}
              onPress={handlePress(index)}
            >
              <Text
                style={[styles.text, index === viewCurrent && { color: COLOR.a }]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {views[viewCurrent]}
        {/* <Text>{JSON.stringify(consumptionHistory)}</Text> */}
      </ScrollView>
    </Section>
  )
}

export default Statistics
