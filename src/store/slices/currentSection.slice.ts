import { Slice } from '../slice'

export enum SECTIONS {
  statistics = 'statistics',
  home = 'home',
  tips = 'tips',
  forum = 'forum',
}

export interface CurrentSectionSlice {
  currentSection: SECTIONS
  setCurrentSection: (sectionKey: SECTIONS) => void
}

export const createCurrentSectionSlice: Slice<CurrentSectionSlice> = set => ({
  currentSection: SECTIONS.home,
  setCurrentSection: sectionKey => set(() => ({ currentSection: sectionKey })),
})