import { GeneralData } from '@/models'
import { Slice } from '../slice'
import { getGeneralData, updateGeneralData } from '@/services'

const defaultState: GeneralData = {
  username: 'Rosario',
  sensorMinDistance: 19,
  h: 25,
  diameter: 40,
}

export interface GeneralDataSlice {
  generalData: GeneralData
  setGeneralData: (newGeneralData: GeneralData) => void
}

const getInitState = async (): Promise<GeneralData> => {
  const generalDataSaved = await getGeneralData()
  if (generalDataSaved) return generalDataSaved

  await updateGeneralData(defaultState)
  return defaultState
}

export const createGeneralDataSlice: Slice<GeneralDataSlice> = set => {
  let generalData

  getInitState().then(data => {
    generalData = data
  })

  return {
    generalData: generalData || defaultState,
    setGeneralData: async newGeneralData => {
      await updateGeneralData(newGeneralData)

      set(() => ({ generalData: newGeneralData }))
    },
  }
}
