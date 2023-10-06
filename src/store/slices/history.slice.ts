import { HistoryItem } from '@/models'
import { Slice } from '../slice'

const defaultState: HistoryItem[] = []

export interface HistorySlice {
  history: HistoryItem[]
  setHistory: (history: HistoryItem[]) => void
  addToHistory: (item: HistoryItem) => void
}

export const createHistorySlice: Slice<HistorySlice> = set => ({
  history: defaultState,
  setHistory: history => set(() => ({ history })),
  addToHistory: item =>
    set(store => {
      const newHistory = [...store.history]

      newHistory.push(item)

      return { history: newHistory }
    }),
})
