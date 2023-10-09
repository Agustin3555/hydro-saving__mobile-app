import { ConsumptionHistoryItem } from '@/models'
import { Slice } from '../slice'

const DEFAULT_STATE: ConsumptionHistoryItem[] = []

const startDate = new Date('2020-10-01 0:0')
const endDate = new Date() // Fecha actual

const minConsumption = 4000
const maxConsumption = 7500

const daysBetween = Math.floor(
  (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
)

for (let i = 0; i <= daysBetween; i++) {
  const date = new Date(startDate)
  date.setDate(startDate.getDate() + i)

  const randomConsumption =
    Math.floor(Math.random() * (maxConsumption - minConsumption + 1)) +
    minConsumption

  DEFAULT_STATE.push({
    date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(date.getDate()).padStart(2, '0')} 0:0`,
    consumption: randomConsumption,
  })
}

export interface ConsumptionHistorySlice {
  consumptionHistory: ConsumptionHistoryItem[]
}

export const createConsumptionHistorySlice: Slice<ConsumptionHistorySlice> = () => ({
  consumptionHistory: DEFAULT_STATE,
})
