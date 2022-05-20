export function getType(element: any): string {
  const type = typeof element
  if (type !== 'object') {
    return type
  }
  return Object.prototype.toString.call(element).replace(/^\[object (\S+)]$/, (match, $1: string) => {
    return $1.toLocaleLowerCase()
  })
}

export function isObject(val: any): boolean {
  return getType(val) === 'object'
}

export function isNull(val: any): boolean {
  return getType(val) === 'null'
}

export function isUndefined(val: any): boolean {
  return getType(val) === 'undefined'
}
