import { StyleSheet } from 'react-native'

export type Layout = StyleSheet.NamedStyles<{
  main?: {}
}>

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
})
