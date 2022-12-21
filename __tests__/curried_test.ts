import {expect, test} from '@jest/globals'
import { curried } from '../src'

const add = (x: number, y: number) => {
  return x + y
}
const curryAdd = curried(add)

test('test the curried function', () => {
  const curryAdd2 = curryAdd(2)
  expect(curryAdd2(10)).toBe(12)
})