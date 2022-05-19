export function getType(element: string): string {
  const type = typeof element
  if (type !== 'object') {
    return type
  }
  return Object.prototype.toString.call(element).replace(/^[Object (\S+)]$/, (match, $1: string) => {
    return $1.toLocaleLowerCase()
  })
}
