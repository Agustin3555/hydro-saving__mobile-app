import { TankData } from '@/models'
import { Slice } from '../slice'

const DEFAULT_STATE: TankData = { sensorDistance: 110, flowRate: 0 }

export interface TankDataSlice {
  tankData: TankData
  setTankData: (value: TankData) => void
}

export const createTankDataSlice: Slice<TankDataSlice> = set => ({
  tankData: DEFAULT_STATE,
  setTankData: value => set(() => ({ tankData: value })),
})
