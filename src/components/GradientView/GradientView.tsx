import { View } from 'react-native'
import { Svg, Defs, LinearGradient, Stop, Rect, NumberProp } from 'react-native-svg'
import * as GradientViewStyled from './GradientView.styled'
import { useMemo } from 'react'
import { COLOR, Color } from '@/styles'

type Stops = {
  offset: NumberProp
  color: Color
}[]

const GradientView = ({
  stops = [
    { offset: '0%', color: COLOR.g_0 },
    { offset: '100%', color: COLOR.g_19 },
  ],
  style = { width: '100%', height: '100%', angle: 0 },
  extendedStyle,
  children,
}: {
  stops?: Stops
  style?: GradientViewStyled.Props
  extendedStyle?: GradientViewStyled.Layout
  children?: JSX.Element | JSX.Element[]
}) => {
  const styles = useMemo(
    () => GradientViewStyled.adapter({ extendedStyle, style }),
    [style, extendedStyle]
  )

  const gradientCoordinates = useMemo(() => {
    // Convertimos el ángulo de grados a radianes
    const radianAngle = (style.angle * Math.PI) / 180

    // Calculamos las coordenadas
    const x1 = `${50 - 50 * Math.cos(radianAngle)}%`
    const y1 = `${50 - 50 * Math.sin(radianAngle)}%`
    const x2 = `${50 + 50 * Math.cos(radianAngle)}%`
    const y2 = `${50 + 50 * Math.sin(radianAngle)}%`

    return { x1, y1, x2, y2 }
  }, [stops])

  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id="grad" {...gradientCoordinates}>
            {stops.map(item => (
              <Stop offset={item.offset} stopColor={item.color} key={item.offset} />
            ))}
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <View style={styles.content}>{children && children}</View>
    </View>
  )
}

export default GradientView
