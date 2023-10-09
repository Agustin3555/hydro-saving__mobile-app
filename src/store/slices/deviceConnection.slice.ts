import { Slice } from '../slice'

const DEFAULT_STATE: boolean = false

export interface DeviceConnectionSlice {
  deviceConnection: boolean
  setDeviceConnection: (value: boolean) => void
}

export const createDeviceConnectionSlice: Slice<DeviceConnectionSlice> = set => ({
  deviceConnection: DEFAULT_STATE,
  setDeviceConnection: value => set(() => ({ deviceConnection: value })),
})
