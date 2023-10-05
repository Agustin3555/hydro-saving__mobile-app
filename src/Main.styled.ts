import { StyleSheet } from 'react-native'
import { MAIN_GAP } from './styles'
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
  sections: {
    flex: 1,
    paddingVertical: MAIN_GAP,
    marginTop: Constants.statusBarHeight,
  },
})
