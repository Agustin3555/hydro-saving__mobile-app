import { Animated, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Section from '../Section/Section'
import { SECTIONS, useAppStore } from '@/store'
import { useState } from 'react'
import { styles } from './Statistics.styled'
import { COLOR } from '@/styles'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

enum VIEWS {
  day,
  week,
  month,
  year,
}

const views = ['Día', 'Semana', 'Mes', 'Año']

const Statistics = () => {
  const history = useAppStore(store => store.history)
  const [viewCurrent, setViewCurrent] = useState(VIEWS.day)

  const handlePress = (view: VIEWS) => () => {
    setViewCurrent(view)
  }

  return (
    <Section sectionKey={SECTIONS.statistics}>
      <ScrollView>
        <View style={styles.viewSelector}>
          {views.map((item, index) => (
            <AnimatedTouchableOpacity
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
            </AnimatedTouchableOpacity>
          ))}
        </View>
        <Text>{JSON.stringify(history)}</Text>
      </ScrollView>
    </Section>
  )
}

export default Statistics
