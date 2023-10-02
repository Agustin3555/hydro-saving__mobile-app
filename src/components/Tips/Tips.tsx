import { Dimensions, Text, View } from 'react-native'
import Section from '../Section/Section'
import { SECTIONS } from '@/store'
import { styles } from './Tips.styled'
import Slider from '../Slider/Slider'
import GradientView from '../GradientView/GradientView'
import { MAIN_GAP, NOT_FONT_SIZE } from '@/styles'

const itemData = ['1', '2', '3', '4']

const { width } = Dimensions.get('screen')

const Tips = () => {
  return (
    <Section sectionKey={SECTIONS.tips}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Sabías que ...?</Text>
        <Slider
          itemData={itemData}
          renderItem={({ item, index }) => (
            <GradientView
              style={{
                width: width - MAIN_GAP * 4,
                angle: 180,
              }}
              extendedStyle={{
                container: {
                  ...styles.itemContainer,
                  marginLeft: index === 0 && MAIN_GAP * 2,
                  marginRight: index === itemData.length - 1 && MAIN_GAP * 2,
                },
                content: styles.itemContent,
              }}
            >
              <Text style={styles.tip}>{item}</Text>
            </GradientView>
          )}
        />
      </View>
    </Section>
  )
}

export default Tips
