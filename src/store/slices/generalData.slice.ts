import { GeneralData } from '@/models'
import { Slice } from '../slice'
import { getGeneralData, updateGeneralData } from '@/services'

const DEFAULT_STATE: GeneralData = {
  username: 'User_1',
  sensorMinDistance: 11.1,
  h: 14,
  diameter: 30,
}

export interface GeneralDataSlice {
  generalData: GeneralData
  setGeneralData: (newGeneralData: GeneralData) => void
}

const getInitState = async (): Promise<GeneralData> => {
  const generalDataSaved = await getGeneralData()
  if (generalDataSaved) return generalDataSaved

  await updateGeneralData(DEFAULT_STATE)
  return DEFAULT_STATE
}

export const createGeneralDataSlice: Slice<GeneralDataSlice> = set => {
  let generalData

  getInitState().then(data => {
    generalData = data
  })

  return {
    generalData: generalData || DEFAULT_STATE,
    setGeneralData: async newGeneralData => {
      await updateGeneralData(newGeneralData)

      set(() => ({ generalData: newGeneralData }))
    },
  }
}
