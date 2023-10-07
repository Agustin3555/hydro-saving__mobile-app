import { Text, View } from 'react-native'
import { styles } from './ViewByTime.styled'

const ViewByTime = () => {
  return (
    <View>
      <View style={styles.info}>
        <View style={styles.infoCard}>
          <View style={styles.valueGroup}>
            <Text style={styles.value}>0.05</Text>
            <Text style={styles.unit}>litros</Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.desc}>Menos que la semana anterior</Text>
        </View>
        <View style={styles.infoCard}>
          <View style={styles.valueGroup}>
            <Text style={styles.value}>1025</Text>
            <Text style={styles.unit}>litros</Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.desc}>Consumo</Text>
        </View>
        <View style={styles.infoCard}>
          <View style={styles.valueGroup}>
            <Text style={styles.value}>1025</Text>
            <Text style={styles.unit}>litros</Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.desc}>Más que la semana anterior</Text>
        </View>
      </View>
    </View>
  )
}

export default ViewByTime
