import { History } from '@/models'
import { getJSON, updateJSON } from '@/tools'

const FILE_NAME = 'history'

export const getPersistedHistory = async () => await getJSON<History>(FILE_NAME)

export const updatePersistedHistory = async (data: History) =>
  await updateJSON(FILE_NAME, data)
