import { getType } from '../src'

describe('getType Test', () => {
  test('happy path', () => {
    const ele = 'Hello'
    expect(getType(ele)).toBe('string')
    expect(getType(ele)).not.toBe('number')
  })
})
