import { ConsumptionHistoryItem } from '@/models'

export const filterByRange = (
  history: ConsumptionHistoryItem[],
  fechaInicio: Date,
  fechaFin: Date
) => {
  const s = `${fechaInicio.getFullYear()}-${String(
    fechaInicio.getMonth() + 1
  ).padStart(2, '0')}-${String(fechaInicio.getDate()).padStart(2, '0')} 0:0`
  const e = `${fechaFin.getFullYear()}-${String(fechaFin.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(fechaFin.getDate()).padStart(2, '0')} 0:0`

  return history.filter(objeto => {
    const fecha = new Date(objeto.date)

    return fecha >= new Date(s) && fecha <= new Date(e)
  })
}
