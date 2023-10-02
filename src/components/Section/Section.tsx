import { Animated, Easing } from 'react-native'
import { styles } from './Section.styled'
import { ReactNode, useEffect, useMemo, useRef } from 'react'
import { SECTIONS, useAppStore } from '@/store'
import { MICROINTERACTION } from '@/styles'

const Section = ({
  sectionKey,
  children,
}: {
  sectionKey: SECTIONS
  children: ReactNode
}) => {
  const currentSection = useAppStore(store => store.currentSection)
  const isSelected = useMemo(() => sectionKey === currentSection, [currentSection])

  const opacityAnim = useRef(new Animated.Value(1)).current
  const scaleAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: isSelected ? 1 : 0,
      duration: MICROINTERACTION.xs,
      easing: Easing.out(Easing.linear),
      delay: isSelected ? 125 : 0,
      useNativeDriver: true,
    }).start()

    Animated.timing(scaleAnim, {
      toValue: isSelected ? 1 : 0.95,
      duration: MICROINTERACTION.xs,
      easing: Easing.out(Easing.linear),
      delay: isSelected ? 125 : 0,
      useNativeDriver: true,
    }).start()
  }, [isSelected])

  return (
    <Animated.View
      pointerEvents={isSelected ? 'auto' : 'none'}
      style={[
        styles.container,
        { opacity: opacityAnim, transform: [{ scale: scaleAnim }] },
      ]}
    >
      {children}
    </Animated.View>
  )
}

export default Section
