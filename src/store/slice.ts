import { StateCreator } from 'zustand'
import {
  ConsumptionThisDaySlice,
  CurrentSectionSlice,
  GeneralDataSlice,
  ConsumptionHistorySlice,
  TankDataSlice,
  DeviceConnectionSlice,
} from './slices'

export type AppStore = CurrentSectionSlice &
  GeneralDataSlice &
  ConsumptionHistorySlice &
  TankDataSlice &
  ConsumptionThisDaySlice &
  DeviceConnectionSlice

export type Slice<T> = StateCreator<AppStore, [], [], T>
