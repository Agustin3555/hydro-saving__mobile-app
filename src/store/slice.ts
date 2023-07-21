import { StateCreator } from 'zustand'
import { CurrentSectionSlice } from './slices'

export type AppStore = CurrentSectionSlice

export type Slice<T> = StateCreator<AppStore, [], [], T>
