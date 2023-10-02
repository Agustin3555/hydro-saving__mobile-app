import { COLOR, FONT, FONT_SIZE, MICROINTERACTION, NOT_FONT_SIZE } from './enums'

export type Font = FONT

export type FontSize = number | FONT_SIZE | '100%'

export type NotFontSize = number | NOT_FONT_SIZE | '100%'

export type Size = FontSize | NotFontSize

export type Color = COLOR

export type Microinteraction = MICROINTERACTION

export type Elevation = 0 | 1 | 2 | 3

export type Knob = 0 | 0.125 | 0.25 | 0.375 | 0.5 | 0.625 | 0.75 | 0.875 | 1
