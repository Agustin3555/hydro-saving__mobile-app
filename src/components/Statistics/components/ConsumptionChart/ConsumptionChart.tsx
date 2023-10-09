import { View, Text } from 'react-native'
import { styles } from './ConsumptionChart.styled'

const ConsumptionChart = ({
  maxConsumption,
  pattern = 1,
  values,
}: {
  maxConsumption: number
  pattern?: number
  values: { ref: string; consumption: number }[]
}) => {
  return (
    <View style={styles.container}>
      {values.map((item, index) => (
        <View style={styles.item} key={item.ref + index.toString()}>
          <View style={styles.barContainer}>
            <View
              style={[
                styles.bar,
                { height: `${(item.consumption / maxConsumption) * 100}%` },
              ]}
            />
          </View>
          {index % pattern === 0 && (
            <View style={styles.textContainer}>
              <Text style={styles.ref}>{item.ref}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  )
}

export default ConsumptionChart
