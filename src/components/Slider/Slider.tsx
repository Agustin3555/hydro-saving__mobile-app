import {
  Animated,
  Easing,
  FlatList,
  ListRenderItem,
  View,
  ViewToken,
} from 'react-native'
import { INDICATOR_SIZE, styles } from './Slider.styled'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MICROINTERACTION } from '@/styles'

const Slider = <T,>({
  itemData,
  renderItem,
}: {
  itemData: T[]
  renderItem: ListRenderItem<T>
}) => {
  const [index, setIndex] = useState(0)

  const handleOnViewableItemsChanged: (info: {
    viewableItems: Array<ViewToken>
    changed: Array<ViewToken>
  }) => void = useCallback(({ viewableItems }) => {
    const itemInView = viewableItems[0].index

    if (itemInView !== null) setIndex(itemInView)
  }, [])

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current

  // const widthAnim = useRef(new Animated.Value(1)).current
  // const opacityAnim = useRef(new Animated.Value(1)).current

  // useEffect(() => {
  //   Animated.timing(widthAnim, {
  //     toValue: index ? INDICATOR_SIZE * 2 : INDICATOR_SIZE,
  //     duration: MICROINTERACTION.xs,
  //     easing: Easing.out(Easing.linear),
  //     delay: index ? 125 : 0,
  //     useNativeDriver: true,
  //   }).start()

  //   Animated.timing(opacityAnim, {
  //     toValue: index ? 1 : 0.75,
  //     duration: MICROINTERACTION.xs,
  //     easing: Easing.out(Easing.linear),
  //     delay: index ? 125 : 0,
  //     useNativeDriver: true,
  //   }).start()
  // }, [index])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.slider}
        data={itemData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        decelerationRate="fast"
      />
      <View style={styles.indicatorsContainer}>
        {itemData.map((_, i) => (
          <Animated.View
            style={[
              styles.indicator,
              i === index && {
                flex: 0.075,
                opacity: 1,
              },
            ]}
            key={i}
          />
        ))}
      </View>
    </View>
  )
}

export default Slider
