import { Animated, Easing, TouchableOpacity, View } from 'react-native'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import * as TabStyled from './Tab.styled'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { SECTIONS, useAppStore } from '@/store'
import { COLOR, FONT_SIZE, MICROINTERACTION } from '@/styles'
import Icon from '../Icon/Icon'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

export const Tab = ({
  sectionKey,
  faIcon,
  title,
  extendedStyle,
}: {
  sectionKey: SECTIONS
  faIcon: IconProp
  title: string
  extendedStyle?: TabStyled.Layout
}) => {
  const styles = useMemo(() => TabStyled.adapter({ extendedStyle }), [extendedStyle])

  const currentSection = useAppStore(store => store.currentSection)
  const setCurrentSection = useAppStore(store => store.setCurrentSection)

  const isSelected = currentSection === sectionKey

  const iconOpacityAnim = useRef(new Animated.Value(1)).current
  const iconActiveOpacityAnim = useRef(new Animated.Value(1)).current
  const backgroundColorAnim = useRef(new Animated.Value(1)).current
  const opacityAnim = useRef(new Animated.Value(1)).current
  const translateYAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(iconOpacityAnim, {
      toValue: isSelected ? 0 : 1,
      duration: MICROINTERACTION.s,
      easing: Easing.out(Easing.linear),
      useNativeDriver: true,
    }).start()

    Animated.timing(iconActiveOpacityAnim, {
      toValue: isSelected ? 1 : 0,
      duration: MICROINTERACTION.s,
      easing: Easing.out(Easing.linear),
      useNativeDriver: true,
    }).start()

    Animated.timing(backgroundColorAnim, {
      toValue: isSelected ? 1 : 0,
      duration: MICROINTERACTION.s,
      easing: Easing.out(Easing.linear),
      useNativeDriver: true,
    }).start()

    Animated.timing(opacityAnim, {
      toValue: isSelected ? 1 : 0,
      duration: MICROINTERACTION.s,
      delay: isSelected ? 125 : 0,
      useNativeDriver: true,
    }).start()

    Animated.timing(translateYAnim, {
      toValue: isSelected ? 0 : FONT_SIZE.xs,
      duration: MICROINTERACTION.s,
      easing: Easing.out(Easing.linear),
      delay: isSelected ? 0 : 125,
      useNativeDriver: true,
    }).start()
  }, [isSelected])

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', COLOR.g_4],
  })

  const handlePress = useCallback(() => {
    if (isSelected) return

    setCurrentSection(sectionKey)
  }, [isSelected])

  return (
    <View style={styles.tabContainer}>
      <Animated.Text
        style={[
          styles.title,
          { opacity: opacityAnim, transform: [{ translateY: translateYAnim }] },
        ]}
      >
        {title}
      </Animated.Text>
      <AnimatedTouchableOpacity
        style={[styles.button, { backgroundColor }]}
        activeOpacity={0.875}
        onPress={handlePress}
      >
        <View style={styles.iconContainer}>
          <Animated.View style={[styles.icon, { opacity: iconOpacityAnim }]}>
            <Icon
              faIcon={faIcon}
              style={{ size: TabStyled.ICON_SIZE, color: COLOR.b_b1 }}
            />
          </Animated.View>
          <Animated.View style={[styles.icon, { opacity: iconActiveOpacityAnim }]}>
            <Icon
              faIcon={faIcon}
              style={{ size: TabStyled.ICON_SIZE, color: COLOR.a_d2 }}
            />
          </Animated.View>
        </View>
      </AnimatedTouchableOpacity>
    </View>
  )
}

export default Tab
