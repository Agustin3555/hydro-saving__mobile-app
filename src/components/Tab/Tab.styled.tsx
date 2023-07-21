import { NOT_FONT_SIZE } from '@/styles'
import { StyleSheet } from 'react-native'

export type Layout = StyleSheet.NamedStyles<{
  container?: {}
}>

export const adapter = ({ extendedStyle }: { extendedStyle?: Layout }): Layout => {
  return StyleSheet.create({
    container: {
      padding: NOT_FONT_SIZE.xs,
      borderRadius: NOT_FONT_SIZE['6xl'],
      backgroundColor: 'grey',

      ...extendedStyle?.container,
    },
  })
}
