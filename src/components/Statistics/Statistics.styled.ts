import { COLOR, FONT_SIZE, MAIN_GAP, NOT_FONT_SIZE } from '@/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: MAIN_GAP * 0.5,
  },
  viewSelector: {
    alignSelf: 'center',

    flexDirection: 'row',
    backgroundColor: COLOR.a,
    borderRadius: NOT_FONT_SIZE['6xl'],
    marginBottom: MAIN_GAP * 0.5,
  },
  button: {
    width: NOT_FONT_SIZE.xl - NOT_FONT_SIZE.s,
    paddingHorizontal: FONT_SIZE.xs,
    paddingVertical: FONT_SIZE.xs * 0.5,
    borderRadius: NOT_FONT_SIZE['6xl'],
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE.xs,
    color: COLOR.g_0,
  },
})
