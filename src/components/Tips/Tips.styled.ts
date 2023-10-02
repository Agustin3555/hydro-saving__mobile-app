import { COLOR, FONT_SIZE, MAIN_GAP, NOT_FONT_SIZE } from '@/styles'
import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    gap: MAIN_GAP,
  },
  title: {
    fontSize: FONT_SIZE.l,
    textAlign: 'center',
    color: COLOR.g_2,
  },
  itemContainer: {
    overflow: 'hidden',
    borderRadius: NOT_FONT_SIZE.xs,
    marginHorizontal: MAIN_GAP * 0.375,
  },
  itemContent: {
    padding: MAIN_GAP,
  },
  tip: {
    fontSize: FONT_SIZE.s,
    color: COLOR.g_2,
  },
})
