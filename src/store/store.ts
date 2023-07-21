import { create } from 'zustand'
import { AppStore } from './slice'
import { createCurrentSectionSlice } from './slices'

export const useAppStore = create<AppStore>()((...a) => ({
  ...createCurrentSectionSlice(...a),
}))
