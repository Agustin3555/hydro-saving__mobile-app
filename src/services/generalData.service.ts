import { GeneralData } from '@/models'
import { getJSON, updateJSON } from '@/tools'

const FILE_NAME = 'generalData'

export const getGeneralData = async () => await getJSON<GeneralData>(FILE_NAME)

export const updateGeneralData = async (data: GeneralData) =>
  await updateJSON(FILE_NAME, data)
