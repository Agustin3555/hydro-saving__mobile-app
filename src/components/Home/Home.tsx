import { Text, View, Animated, Easing, TouchableOpacity } from 'react-native'
import Wave from 'react-native-waveview'
import Section from '../Section/Section'
import { SECTIONS } from '@/store'
import { styles } from './Home.styled'
import { useEffect, useRef, useState } from 'react'
import { COLOR, FONT_SIZE, MICROINTERACTION, NOT_FONT_SIZE } from '@/styles'
import Tank from '@/../assets/tank.svg'
import BackgroundTimer from 'react-native-background-timer'
import { getTankData } from '@/services'
import Icon from '../Icon/Icon'
import { faFaucetDrip } from '@fortawesome/free-solid-svg-icons'

const MIN_DISTANCE = 19
const H = 25

const maxDistance = MIN_DISTANCE + H

const Home = () => {
  const [percent, setPercent] = useState(0)
  const [flow, setFlow] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const heightAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: 276 * percent * 0.01,
      duration: MICROINTERACTION.xl,
      easing: Easing.out(Easing.linear),
      useNativeDriver: false,
    }).start()
  }, [percent])

  useEffect(() => {
    const update = () => {
      getTankData().then(tankData => {
        setLoaded(true)

        if (tankData) {
          let sensorDistance = tankData.sensorDistance

          if (sensorDistance < MIN_DISTANCE) sensorDistance = MIN_DISTANCE
          if (sensorDistance > maxDistance) sensorDistance = maxDistance
          sensorDistance = sensorDistance - MIN_DISTANCE

          const newPercent = Math.floor((sensorDistance / H) * 100)

          setPercent(newPercent)
          setFlow(tankData.flowRate)
          return
        }

        setLoaded(false)
      })
    }

    const interval = setInterval(update, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Section sectionKey={SECTIONS.home}>
      <Text style={styles.desc} numberOfLines={2}>
        {loaded
          ? 'El porcentaje actual de carga es'
          : 'Conectando con el dispositivo ...'}
      </Text>
      <View style={styles.main}>
        <Text style={styles.percent}>{percent} %</Text>
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
        <View style={styles.flowContainer}>
          <Icon
            faIcon={faFaucetDrip}
            style={{ size: FONT_SIZE.xs, color: COLOR.a }}
          />
          <Text style={styles.flow}>Caudal: {flow} ml/min</Text>
        </View>
      </View>
    </Section>
  )
}

export default Home
