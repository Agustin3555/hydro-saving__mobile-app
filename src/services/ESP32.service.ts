import { TankData } from '@/models'
import axios from 'axios'

const ESP32_IP = '192.168.100.59'

export const getTankData = async () => {
  try {
    const response = await axios.get(`http://${ESP32_IP}`)

    return response.data as TankData
  } catch (error) {
    console.log('Error al obtener datos del tanque:', error)
    return null
  }
}
