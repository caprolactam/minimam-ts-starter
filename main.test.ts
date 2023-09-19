import { expect, describe, test } from 'vitest'
import { sumNumbers } from './main.ts'

describe('sumNumbers', () => {
  test('返り値は2つの引数の合計と等しい', () => {
    expect(sumNumbers(1, 1)).toBe(2)
  })
  test('返り値は2つの引数の差と等しくない', () => {
    expect(sumNumbers(1, 1)).not.toBe(0)
  })
})
