import { Text, View } from 'react-native'
import { styles } from './ViewByTime.styled'
import { ReactElement } from 'react'

const ViewByTime = ({
  extraInfo,
  children,
}: {
  extraInfo?: { value: number; unit?: string; desc?: string }[]
  children: ReactElement | ReactElement[]
}) => {
  return (
    <View style={styles.container}>
      {children}
      {extraInfo &&
        extraInfo.map((item, index) => (
          <View style={styles.infoCard} key={index}>
            <View style={styles.valueGroup}>
              <Text style={styles.value}>{item.value}</Text>
              <Text style={styles.unit}>{item.unit ? item.unit : 'litros'}</Text>
            </View>
            <View style={styles.separator} />
            <Text style={styles.desc}>{item.desc ? item.desc : 'Consumo'}</Text>
          </View>
        ))}
    </View>
  )
}

export default ViewByTime
