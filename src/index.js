module.exports = function toReadable(number) {

    const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/

    const numShort = (n) => a[Number(n)]
    const numTenths = (n) => b[n[0]] + ' ' + a[n[1]]

    if (isNaN(number)) return ''
  if (number === 0) return 'zero'

  const numStr = number.toString()
  if (numStr.length > 9) {
    throw new Error('Error') 
  }

  const [, n1, n2, n3, n4, n5] = ('000000000' + numStr).substr(-9).match(regex)

  let str = ''
  str += n1 != 0 ? (numShort(n1) || numTenths(n1)) + 'crore ' : ''
  str += n2 != 0 ? (numShort(n2) || numTenths(n2)) + 'lakh ' : ''
  str += n3 != 0 ? (numShort(n3) || numTenths(n3)) + 'thousand ' : ''
  str += n4 != 0 ? numShort(n4) + 'hundred ' : ''
  str += n5 != 0 && str != '' ? '' : ''
  str += n5 != 0 ? (numShort(n5) || numTenths(n5)) : ''

  return str.trim()
}
