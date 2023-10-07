import { TouchableOpacity, View, Text } from 'react-native'
import Icon from '@/components/Icon/Icon'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { styles } from './TimeRangeSelector.styled'
import { COLOR, FONT_SIZE } from '@/styles'

const TimeRangeSelector = ({
  range,
  handlePrevPress,
  handleNextPress,
}: {
  range: string
  handlePrevPress: () => void
  handleNextPress: () => void
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.75}
        onPress={handlePrevPress}
      >
        <Icon
          faIcon={faChevronLeft}
          style={{ size: FONT_SIZE.xs, color: COLOR.a }}
        />
      </TouchableOpacity>
      <Text style={styles.range}>{range}</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.75}
        onPress={handleNextPress}
      >
        <Icon
          faIcon={faChevronRight}
          style={{ size: FONT_SIZE.xs, color: COLOR.a }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default TimeRangeSelector
