import { COLOR, FONT_SIZE, NOT_FONT_SIZE } from '@/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: NOT_FONT_SIZE['5xs'],
    padding: FONT_SIZE.l,
    borderRadius: NOT_FONT_SIZE.xs,
    backgroundColor: COLOR.g_1,
  },
  item: {
    flex: 1,

    gap: NOT_FONT_SIZE['3xs'],
  },
  barContainer: {
    justifyContent: 'flex-end',
    height: NOT_FONT_SIZE['2xl'] - NOT_FONT_SIZE.m,
  },
  bar: {
    borderRadius: NOT_FONT_SIZE['5xs'],
    backgroundColor: COLOR.a,
  },
  textContainer: {
    height: FONT_SIZE['2xs'],
  },
  ref: {
    position: 'absolute',
    width: NOT_FONT_SIZE['l'],
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE['2xs'],
    color: COLOR.a,
  },
})
