import { Dimensions, ScrollView, Text, View } from 'react-native'
import Section from '../Section/Section'
import { SECTIONS } from '@/store'
import { styles } from './Tips.styled'
import Slider from '../Slider/Slider'
import GradientView from '../GradientView/GradientView'
import { MAIN_GAP } from '@/styles'

const tips = [
  'Impacto: El derroche de agua al esperar a que la ducha se caliente puede resultar en un consumo significativo de agua innecesaria en cada baño.\n\nAcción recomendada: En lo que tarda en calentar el agua se recomienda utilizar un balde en el que dejes correr el agua fría hasta alcanzar la temperatura deseada. Luego esa misma agua que se almaceno en el balde se podrá utilizar para lavar ropa.',
  'Impacto: En varias ocasiones el agua que manipulamos para cocinar ciertos alimentos y luego derramarla pudo ser destinada a un mejor uso.\n\nAcción recomendada: Te damos un ejemplo de una manera creativa para no derrochar esta agua. Los huevos al hervirlos largan nutrientes en el agua que son beneficiosos para las plantas, espera a que se enfrié y úsala para regarlas y que crezcan más sanas y fuertes.',
  'Impacto: El lavado de autos con una manguera puede consumir una gran cantidad de agua, contribuyendo al derroche de este recurso natural.\n\nAcción recomendada: Opta por el lavado de autos utilizando baldes de agua. Al hacer esto con baldes, puedes controlar mejor la cantidad de agua utilizada, minimizando el desperdicio. Utiliza un balde para enjabonar y otro para enjuagar, de esta manera, reduces aún más el consumo de agua.',
  'Impacto: Regar las plantas en horarios de mucho calor puede ser contraproducente, ya que el agua puede evaporarse rápidamente antes de que las plantas tengan la oportunidad de absorberla completamente.\n\nAcción recomendada: Programa tu riego para temprano en la mañana, antes de que el sol esté en su punto más alto. Esto ayuda a que las plantas absorban el agua y se hidraten antes de que el calor del día provoque la evaporación. De todos modos, puedes elegir regar al atardecer. Al disminuir el calor del día, se reduce la evaporación y permite que las plantas absorban el agua de manera efectiva.',
  'Impacto: Muchas veces podemos presentar perdidas o fugas en ciertas áreas de las que no nos percatamos.\n\nAcción recomendada: Realiza una inspección detallada en tu hogar para identificar cualquier fuga en grifos, cañerías o inodoros. Una vez identificada la fuga, toma medidas inmediatas para repararla o llama a un profesional para que lo haga. Cada fuga reparada contribuye directamente a la preservación del recurso hídrico y la conservación de la misma.',
]

const { width } = Dimensions.get('screen')

const Tips = () => {
  return (
    <Section sectionKey={SECTIONS.tips}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Sabías que ...?</Text>
        <Slider
          itemData={tips}
          renderItem={({ item, index }) => (
            <GradientView
              style={{
                width: width - MAIN_GAP * 3,
                angle: 180,
              }}
              extendedStyle={{
                container: {
                  ...styles.itemContainer,
                  marginLeft: index === 0 && MAIN_GAP * 1.5,
                  marginRight: index === tips.length - 1 && MAIN_GAP * 1.5,
                },
                content: styles.itemContent,
              }}
            >
              <ScrollView>
                <Text style={styles.tip}>{item}</Text>
              </ScrollView>
            </GradientView>
          )}
        />
      </View>
    </Section>
  )
}

export default Tips
