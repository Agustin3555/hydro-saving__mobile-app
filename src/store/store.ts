import { create } from 'zustand'
import { AppStore } from './slice'
import {
  createCurrentSectionSlice,
  createGeneralDataSlice,
  createConsumptionHistorySlice,
  createTankDataSlice,
  createConsumptionThisDaySlice,
  createDeviceConnectionSlice,
} from './slices'

export const useAppStore = create<AppStore>()((...a) => ({
  ...createCurrentSectionSlice(...a),
  ...createGeneralDataSlice(...a),
  ...createConsumptionHistorySlice(...a),
  ...createTankDataSlice(...a),
  ...createConsumptionThisDaySlice(...a),
  ...createDeviceConnectionSlice(...a),
}))
