import { Text, View, Animated, Easing, TouchableOpacity } from 'react-native'
import Wave from 'react-native-waveview'
import Section from '../Section/Section'
import { SECTIONS } from '@/store'
import { styles } from './Home.styled'
import { useEffect, useRef, useState } from 'react'
import { MICROINTERACTION, NOT_FONT_SIZE } from '@/styles'
import Tank from '@/../assets/tank.svg'

const Home = () => {
  const [percent, setPercent] = useState(0)

  const heightAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: 276 * percent * 0.01,
      duration: MICROINTERACTION.xl,
      easing: Easing.out(Easing.linear),
      useNativeDriver: false,
    }).start()
  }, [percent])

  const handlePercentPress = () => {
    if (percent === 100) {
      setPercent(0)
      return
    }

    setPercent(prevPercent => prevPercent + 12.5)
  }

  return (
    <Section sectionKey={SECTIONS.home}>
      <Text style={styles.desc} numberOfLines={2}>
        El porcentaje actual de carga es
      </Text>
      <View style={styles.main}>
        <TouchableOpacity onPress={handlePercentPress}>
          <Text style={styles.percent}>{percent} %</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.water}>
            <Wave
              style={styles.waterWave}
              H={5}
              speed={10000}
              waveParams={[
                { A: 2.5, T: 180 * 4, fill: '#62c2ff' },
                { A: 5, T: 140 * 4, fill: '#0087dc' },
                { A: 10, T: 100 * 4, fill: '#1aa7ff' },
              ]}
              animated={true}
            />
            <Animated.View style={[styles.waterBody, { height: heightAnim }]} />
          </View>
          <Tank
            style={styles.tank}
            height={NOT_FONT_SIZE['4xl'] - NOT_FONT_SIZE.xl}
          />
        </View>
      </View>
    </Section>
  )
}

export default Home
