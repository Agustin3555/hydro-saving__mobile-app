import { StateCreator } from 'zustand'
import {
  ConsumptionThisDaySlice,
  CurrentSectionSlice,
  GeneralDataSlice,
  ConsumptionHistorySlice,
  TankDataSlice,
} from './slices'

export type AppStore = CurrentSectionSlice &
  GeneralDataSlice &
  ConsumptionHistorySlice &
  TankDataSlice &
  ConsumptionThisDaySlice

export type Slice<T> = StateCreator<AppStore, [], [], T>
