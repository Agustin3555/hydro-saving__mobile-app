import { History } from '@/models'
import { getJSON, updateJSON } from '@/tools'

const FILE_NAME = 'history'

export const getHistory = async () => await getJSON<History>(FILE_NAME)

export const updateHistory = async (data: History) =>
  await updateJSON(FILE_NAME, data)
