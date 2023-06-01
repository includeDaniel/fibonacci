import fibonacci from '../index'

describe('fibonacci', () => {
  test('the 0 term should return 0', () => {
    expect(fibonacci(0)).toBe(0)
  })
  test('the 1 term should return 1', () => {
    expect(fibonacci(1)).toBe(1)
  })
  test('the 2 term should return 1', () => {
    expect(fibonacci(2)).toBe(1)
  })
  test('the 3 term should return 2', () => {
    expect(fibonacci(3)).toBe(2)
  })
  test('the 4 term should return 3', () => {
    expect(fibonacci(4)).toBe(3)
  })
  test('the 10 term should return 55', () => {
    expect(fibonacci(10)).toBe(55)
  })
  test('the 13 term should return 233', () => {
    expect(fibonacci(13)).toBe(233)
  })
  test('the 18 term should return 2584', () => {
    expect(fibonacci(18)).toBe(2584)
  })
  test('the 20 term should return 6765', () => {
    expect(fibonacci(20)).toBe(6765)
  })
  test('the 23 term should return 28657', () => {
    expect(fibonacci(23)).toBe(28657)
  })
  test('the -1 term should return a Error', () => {
    expect(() => fibonacci(-1)).toThrow(
      new Error('only accepts positive values')
    )
  })
})
