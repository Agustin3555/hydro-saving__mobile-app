import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View } from 'react-native'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import * as IconStyled from './Icon.styled'
import { useMemo } from 'react'
import { COLOR, FONT_SIZE } from '@/styles'

export const Icon = ({
  faIcon,
  // TODO: establecer el color mas utilizado
  style = { size: FONT_SIZE.xl, color: COLOR.g_0 },
  extendedStyle,
}: {
  faIcon: IconProp
  style?: IconStyled.Props
  extendedStyle?: IconStyled.Layout
}) => {
  const styles = useMemo(
    () => IconStyled.adapter({ extendedStyle, style }),
    [style, extendedStyle]
  )

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faIcon} size={style?.size} color={style?.color} />
    </View>
  )
}

export default Icon
