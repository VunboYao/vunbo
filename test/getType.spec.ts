import { getType, isObject } from '../src'

describe('getType Test', () => {
  test('happy path', () => {
    const ele = 'Hello'
    expect(getType(ele)).toBe('string')
    expect(getType(ele)).not.toBe('number')
    expect(getType({})).toBe('object')
    expect(getType(null)).toBe('null')
  })

  test('isObject', () => {
    const obj0 = { a: '1' }
    expect(isObject(obj0)).toBe(true)
    expect(isObject(null)).toBe(false)
  })
})
