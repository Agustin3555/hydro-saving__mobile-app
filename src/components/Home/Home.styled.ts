import { COLOR, FONT_SIZE, MAIN_GAP } from '@/styles'
import { StyleSheet } from 'react-native'

export type Layout = StyleSheet.NamedStyles<{
  desc?: {}
  main?: {}
  input?: {}
  percent?: {}
  water?: {}
  waterWave?: {}
  waterBody?: {}
  tank?: {}
}>

export const styles = StyleSheet.create({
  desc: {
    textAlign: 'center',
    fontSize: FONT_SIZE.xs,
    lineHeight: FONT_SIZE.xs,
    color: COLOR.g_2,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: MAIN_GAP,
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
})
