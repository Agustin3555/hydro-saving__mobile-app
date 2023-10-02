import {
  documentDirectory,
  readAsStringAsync,
  writeAsStringAsync,
} from 'expo-file-system'

const getFilePath = (fileName: string) => `${documentDirectory}/${fileName}.json`

export const getJSON = async <T>(fileName: string) => {
  try {
    const data = await readAsStringAsync(getFilePath(fileName))

    return JSON.parse(data) as T
  } catch (error) {
    console.error('Error al leer el archivo:', error)

    return null
  }
}

export const updateJSON = async (fileName: string, data: any) => {
  try {
    await writeAsStringAsync(getFilePath(fileName), JSON.stringify(data))
  } catch (error) {
    console.error('Error al escribir en el archivo:', error)

    return null
  }
}
