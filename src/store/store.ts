import { create } from 'zustand'
import { AppStore } from './slice'
import {
  createCurrentSectionSlice,
  createGeneralDataSlice,
  createHistorySlice,
  createTankDataSlice,
} from './slices'

export const useAppStore = create<AppStore>()((...a) => ({
  ...createCurrentSectionSlice(...a),
  ...createGeneralDataSlice(...a),
  ...createHistorySlice(...a),
  ...createTankDataSlice(...a),
}))
