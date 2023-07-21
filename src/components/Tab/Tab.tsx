import { TouchableOpacity } from 'react-native'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import * as TabStyled from './Tab.styled'
import { useCallback, useMemo } from 'react'
import Icon from '../Icon/Icon'
import { SECTIONS, useAppStore } from '@/store'

export const Tab = ({
  sectionKey,
  faIcon,
  extendedStyle,
}: {
  sectionKey: SECTIONS
  faIcon: IconProp
  extendedStyle?: TabStyled.Layout
}) => {
  const currentSection = useAppStore(store => store.currentSection)
  const setCurrentSection = useAppStore(store => store.setCurrentSection)

  const styles = useMemo(() => TabStyled.adapter({ extendedStyle }), [extendedStyle])

  const handlePress = useCallback(() => {
    if (currentSection === sectionKey) return

    setCurrentSection(sectionKey)
  }, [])

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.75}
      onPress={handlePress}
    >
      <Icon faIcon={faIcon} />
    </TouchableOpacity>
  )
}

export default Tab
