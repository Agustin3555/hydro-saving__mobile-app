import { COLOR, FONT_SIZE, NOT_FONT_SIZE } from '@/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: NOT_FONT_SIZE['2xs'],
    borderRadius: NOT_FONT_SIZE['6xl'],
    backgroundColor: COLOR.g_1,
  },
  range: {
    width: NOT_FONT_SIZE['3xl'] - NOT_FONT_SIZE.l,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE.xs,
    color: COLOR.g_0,
  },
})
