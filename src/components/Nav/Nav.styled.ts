import { FONT_SIZE, NOT_FONT_SIZE } from '@/styles'
import { getParentBorderRadius } from '@/tools'
import { StyleSheet } from 'react-native'

export type Layout = StyleSheet.NamedStyles<{
  nav?: {}
}>

const PADDING = NOT_FONT_SIZE.xs
const BORDER_RADIUS = getParentBorderRadius(FONT_SIZE.xl * 0.5 + PADDING, PADDING)

export const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: PADDING,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    backgroundColor: 'blue',
  },
})
