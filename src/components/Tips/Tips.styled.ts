import { COLOR, FONT_SIZE, MAIN_GAP, NOT_FONT_SIZE } from '@/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    gap: MAIN_GAP,
  },
  title: {
    fontFamily: 'Inter-Regular',
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
    padding: MAIN_GAP * 0.75,
  },
  tip: {
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE.xs,
    lineHeight: FONT_SIZE.xs * 1.4,
    color: COLOR.g_2,
  },
})
