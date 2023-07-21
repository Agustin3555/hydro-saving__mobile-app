import { FONT_SIZE, NOT_FONT_SIZE } from '@/styles'
import { StyleSheet } from 'react-native'

export type Layout = StyleSheet.NamedStyles<{
  nav?: {}
}>

const BORDER_RADIUS = NOT_FONT_SIZE.m

export const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: FONT_SIZE.xl,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    backgroundColor: 'blue',
  },
})
