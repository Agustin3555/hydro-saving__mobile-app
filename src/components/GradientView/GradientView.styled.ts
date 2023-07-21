import { SizeExtended } from '@/styles'
import { StyleSheet } from 'react-native'

export type Layout = StyleSheet.NamedStyles<{
  container?: {}
  content?: {}
}>

export interface Props {
  width?: SizeExtended
  height?: SizeExtended
  angle: number
}

export const adapter = ({
  style,
  extendedStyle,
}: {
  style?: Props
  extendedStyle?: Layout
}): Layout => {
  return StyleSheet.create({
    container: {
      width: style?.width,
      height: style?.height,
      justifyContent: 'center',
      alignItems: 'center',

      ...extendedStyle?.container,
    },
    content: {
      position: 'absolute',
      width: '100%',
      height: '100%',

      ...extendedStyle?.content,
    },
  })
}
