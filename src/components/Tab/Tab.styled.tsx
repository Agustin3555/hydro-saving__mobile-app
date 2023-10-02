import { COLOR, FONT_SIZE, NOT_FONT_SIZE } from '@/styles'
import { StyleSheet } from 'react-native'

export type Layout = StyleSheet.NamedStyles<{
  tabContainer?: {}
  button?: {}
  title?: {}
  iconContainer?: {}
  icon?: {}
}>

const THIS_FONT_SIZE = FONT_SIZE['2xs']
export const ICON_SIZE = FONT_SIZE.xl

export const adapter = ({ extendedStyle }: { extendedStyle?: Layout }): Layout => {
  return StyleSheet.create({
    tabContainer: {
      justifyContent: 'center',
      alignItems: 'center',

      ...extendedStyle?.tabContainer,
    },
    title: {
      position: 'absolute',
      top: -(NOT_FONT_SIZE['2xs'] * 2 + THIS_FONT_SIZE),
      width: 80,
      textAlign: 'center',
      fontFamily: 'Inter-Regular',
      fontSize: THIS_FONT_SIZE,
      lineHeight: THIS_FONT_SIZE,
      color: COLOR.g_4,
      letterSpacing: 0.2,

      ...extendedStyle?.title,
    },
    button: {
      padding: NOT_FONT_SIZE.xs,
      borderRadius: NOT_FONT_SIZE['6xl'],

      ...extendedStyle?.button,
    },
    iconContainer: {
      width: ICON_SIZE,
      height: ICON_SIZE,
      alignItems: 'center',
      justifyContent: 'center',

      ...extendedStyle?.iconContainer,
    },
    icon: {
      position: 'absolute',

      ...extendedStyle?.icon,
    },
  })
}
