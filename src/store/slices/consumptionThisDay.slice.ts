import { Slice } from '../slice'

const DEFAULT_STATE: number = 0

export interface ConsumptionThisDaySlice {
  consumptionThisDay: number
  accumulateConsumption: (flowRate: number) => void
}

export const createConsumptionThisDaySlice: Slice<
  ConsumptionThisDaySlice
> = set => ({
  consumptionThisDay: DEFAULT_STATE,
  accumulateConsumption: flowRate =>
    set(store => {
      const newState = store.consumptionThisDay + flowRate / 1000 / 60

      return { consumptionThisDay: newState }
    }),
})
