import { JSDOM } from 'jsdom'
import { getType, isNull, isObject, isUndefined } from '../src'

const jsdom = new JSDOM()
describe('getType Test', () => {
  test('happy path', () => {
    const ele = 'Hello'
    expect(getType(ele)).toBe('string')
    expect(getType(ele)).not.toBe('number')
    expect(getType({})).toBe('object')
    expect(getType(null)).toBe('null')

    const func = () => { }
    expect(getType(func)).toBe('function')

    const formData = new jsdom.window.FormData()
    expect(getType(formData)).toBe('formdata')

    const urlsearchParams = new URLSearchParams()
    expect(getType(urlsearchParams)).toBe('urlsearchparams')
  })

  test('isObject', () => {
    const obj0 = { a: '1' }
    expect(isObject(obj0)).toBe(true)
    expect(isObject(null)).toBe(false)
  })

  test('isNull', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(1)).toBe(false)
  })

  test('isUndefined', () => {
    let a
    expect(isUndefined(a)).toBe(true)
    expect(isUndefined(null)).toBe(false)
  })
})
