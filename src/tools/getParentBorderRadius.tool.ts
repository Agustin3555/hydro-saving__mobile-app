import { Size } from '@/styles'

export const getParentBorderRadius = (childBorderRadius: Size, padding: Size) =>
  childBorderRadius + padding
