import { Text, View, Animated, Easing, TouchableOpacity } from 'react-native'
import Wave from 'react-native-waveview'
import Section from '../Section/Section'
import { SECTIONS, useAppStore } from '@/store'
import { styles } from './Home.styled'
import { useEffect, useMemo, useRef, useState } from 'react'
import { COLOR, FONT_SIZE, MICROINTERACTION, NOT_FONT_SIZE } from '@/styles'
import Tank from '@/../assets/tank.svg'
import Icon from '../Icon/Icon'
import { faFaucetDrip } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const deviceConnection = useAppStore(store => store.deviceConnection)
  const { sensorMinDistance, h } = useAppStore(store => store.generalData)
  const { sensorDistance, flowRate } = useAppStore(store => store.tankData)
  const [percent, setPercent] = useState(0)
  const maxDistance = useMemo(() => sensorMinDistance + h, [sensorMinDistance, h])

  useEffect(() => {
    let auxDistance = sensorDistance / 10

    auxDistance = auxDistance + 11

    // Limitar el valor
    auxDistance = Math.min(Math.max(auxDistance, sensorMinDistance), maxDistance)
    auxDistance = auxDistance - sensorMinDistance

    const newPercent = Math.round((1 - auxDistance / h) * 100)

    setPercent(newPercent)
  }, [sensorDistance])

  const heightAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: 276 * percent * 0.01,
      duration: MICROINTERACTION.xl,
      easing: Easing.out(Easing.linear),
      useNativeDriver: false,
    }).start()
  }, [percent])

  return (
    <Section sectionKey={SECTIONS.home}>
      <Text style={styles.desc} numberOfLines={2}>
        {deviceConnection
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
          <Text style={styles.flow}>Caudal: {flowRate} ml/min</Text>
        </View>
      </View>
    </Section>
  )
}

export default Home
