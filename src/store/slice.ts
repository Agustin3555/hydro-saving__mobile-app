import { StateCreator } from 'zustand'
import {
  CurrentSectionSlice,
  GeneralDataSlice,
  HistorySlice,
  TankDataSlice,
} from './slices'

export type AppStore = CurrentSectionSlice &
  GeneralDataSlice &
  HistorySlice &
  TankDataSlice

export type Slice<T> = StateCreator<AppStore, [], [], T>
