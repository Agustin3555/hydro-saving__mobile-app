import { StyleSheet } from 'react-native'

export type Layout = StyleSheet.NamedStyles<{
  container?: {}
}>

export interface Props {
  size?: number
  color?: string
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
      width: style?.size,
      height: style?.size,
      alignItems: 'center',
      justifyContent: 'center',

      ...extendedStyle?.container,
    },
  })
}
