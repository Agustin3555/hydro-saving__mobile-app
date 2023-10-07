import { Slice } from '../slice'

export enum SECTIONS {
  statistics = 'statistics',
  home = 'home',
  tips = 'tips',
  userSettings = 'userSettings',
}

const DEFAULT_STATE: SECTIONS = SECTIONS.home

export interface CurrentSectionSlice {
  currentSection: SECTIONS
  setCurrentSection: (sectionKey: SECTIONS) => void
}

export const createCurrentSectionSlice: Slice<CurrentSectionSlice> = set => ({
  currentSection: DEFAULT_STATE,
  setCurrentSection: sectionKey => set(() => ({ currentSection: sectionKey })),
})
