import { COLOR, FONT_SIZE, NOT_FONT_SIZE } from '@/styles'
import { getParentBorderRadius } from '@/tools'
import { StyleSheet } from 'react-native'

export type Layout = StyleSheet.NamedStyles<{
  nav?: {}
}>

const PADDING = NOT_FONT_SIZE['2xs']
const BORDER_RADIUS = getParentBorderRadius(
  FONT_SIZE.xl * 0.5 + NOT_FONT_SIZE.xs,
  PADDING
)

export const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: PADDING,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    backgroundColor: COLOR.a_d2,
  },
})
