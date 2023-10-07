import { ConsumptionHistoryItem } from '@/models'
import { getJSON, updateJSON } from '@/tools'

const FILE_NAME = 'history'

export const getPersistedHistory = async () =>
  await getJSON<ConsumptionHistoryItem[]>(FILE_NAME)

export const updatePersistedHistory = async (data: ConsumptionHistoryItem[]) =>
  await updateJSON(FILE_NAME, data)
