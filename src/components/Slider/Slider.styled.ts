import { COLOR, FONT_SIZE, MAIN_GAP, NOT_FONT_SIZE } from '@/styles'
import { StyleSheet } from 'react-native'

export const INDICATOR_SIZE = NOT_FONT_SIZE['2xs']

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: MAIN_GAP,
  },
  slider: {
    // TODO: esto se hace a mano
    height: NOT_FONT_SIZE['4xl'] + NOT_FONT_SIZE.m,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    gap: INDICATOR_SIZE,
  },
  indicator: {
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: NOT_FONT_SIZE['6xl'],
    backgroundColor: COLOR.g_0,
    opacity: 0.5,
  },
})
