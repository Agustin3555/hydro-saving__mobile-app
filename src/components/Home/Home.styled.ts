import { COLOR, FONT_SIZE, MAIN_GAP, NOT_FONT_SIZE } from '@/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  desc: {
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE.xs,
    color: COLOR.g_2,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: MAIN_GAP * 1.25,
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 8,
    fontSize: FONT_SIZE.xs,
    lineHeight: FONT_SIZE.xs,
    borderWidth: 1,
  },
  percent: {
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE.xl,
    lineHeight: FONT_SIZE.xl,
    color: COLOR.g_0,
  },
  water: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 3,
    justifyContent: 'flex-end',
    width: 279.5,
    minHeight: 90,
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderColor: COLOR.g_0,
    overflow: 'hidden',
  },
  waterWave: {
    height: 10 + 4.5,
  },
  waterBody: {
    backgroundColor: '#1aa7ff',
  },
  tank: {
    aspectRatio: 158 / 197,
  },
  flowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: FONT_SIZE.xs,
    paddingHorizontal: FONT_SIZE.xs,
    paddingVertical: FONT_SIZE.xs * 0.5,
    backgroundColor: COLOR.g_2,
    borderRadius: NOT_FONT_SIZE['6xl'],
  },
  flow: {
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE.xs,
    color: COLOR.a,
  },
})
