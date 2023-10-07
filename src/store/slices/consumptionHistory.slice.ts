import { ConsumptionHistoryItem } from '@/models'
import { Slice } from '../slice'

export interface ConsumptionHistorySlice {
  consumptionHistory: ConsumptionHistoryItem[]
}

export const createConsumptionHistorySlice: Slice<ConsumptionHistorySlice> = () => ({
  consumptionHistory: DEFAULT_STATE,
})

const DEFAULT_STATE: ConsumptionHistoryItem[] = [{ date: '', consumption: 1000 }]
