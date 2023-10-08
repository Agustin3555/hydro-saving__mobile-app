import { COLOR, FONT_SIZE, MAIN_GAP, NOT_FONT_SIZE } from '@/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    gap: MAIN_GAP * 0.5,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: FONT_SIZE.l,
    padding: FONT_SIZE.l,
    borderRadius: NOT_FONT_SIZE.xs,
    backgroundColor: COLOR.g_1,
  },
  valueGroup: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: MAIN_GAP * 0.25,
    width: NOT_FONT_SIZE.xl,
  },
  value: {
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE.l,
    lineHeight: FONT_SIZE.l,
    color: COLOR.a,
  },
  unit: {
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE.s,
    lineHeight: FONT_SIZE.s,
    color: COLOR.g_8,
  },
  separator: {
    width: NOT_FONT_SIZE['6xs'],
    height: '100%',
    borderRadius: NOT_FONT_SIZE['6xl'],
    backgroundColor: COLOR.g_8,
  },
  desc: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE['2xs'],
    lineHeight: FONT_SIZE['2xs'] * 1.4,
  },
})
