import { create } from 'zustand'
import { AppStore } from './slice'
import {
  createCurrentSectionSlice,
  createGeneralDataSlice,
  createConsumptionHistorySlice,
  createTankDataSlice,
  createConsumptionThisDaySlice,
} from './slices'

export const useAppStore = create<AppStore>()((...a) => ({
  ...createCurrentSectionSlice(...a),
  ...createGeneralDataSlice(...a),
  ...createConsumptionHistorySlice(...a),
  ...createTankDataSlice(...a),
  ...createConsumptionThisDaySlice(...a),
}))
