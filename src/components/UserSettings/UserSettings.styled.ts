import { COLOR, FONT_SIZE, MAIN_GAP } from '@/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: MAIN_GAP,
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: FONT_SIZE.l,
    color: COLOR.g_2,
  },
})
