import { Data } from '@/models'
import { getJSON, updateJSON } from '@/tools'

const FILE_NAME = 'data'

export const getData = async () => await getJSON<Data>(FILE_NAME)

export const updateData = async (data: Data) => await updateJSON(FILE_NAME, data)
