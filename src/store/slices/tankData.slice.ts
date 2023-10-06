import { TankData } from '@/models'
import { Slice } from '../slice'

const defaultState: TankData = { sensorDistance: 0, flowRate: 0 }

export interface TankDataSlice {
  tankData: TankData
  setTankData: (value: TankData) => void
}

export const createTankDataSlice: Slice<TankDataSlice> = set => ({
  tankData: defaultState,
  setTankData: value => set(() => ({ tankData: value })),
})
