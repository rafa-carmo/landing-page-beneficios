export function convertToCurrency(value: number) {
  let valueToConvert = 0
  if (!isNaN(value)) {
    valueToConvert = value
  }

  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(valueToConvert)
}
