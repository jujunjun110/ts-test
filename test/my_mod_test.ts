import { assert } from 'chai'
import MyMod from '../src/js/my_mod'

const m = new MyMod()

describe('MyMod Instance', () => {
  it('create correct message', () => {
    assert.equal(m.message(), 'hello')
  })

  it('extract number correctly', () => {
    const cases = [
      { case: '123', expected: 123 },
      { case: 'abc', expected: null },
      { case: 'a1b2', expected: 12 }
    ]

    for (const c of cases) {
      const actual = m.extract_number(c.case)
      assert.equal(actual, c.expected)
    }
  })

  it('calculates fib', () => {
    const cases = [
      { case: 1, expected: 1 },
      { case: 2, expected: 1 },
      { case: 10, expected: 55 },
    ]

    for (const c of cases) {
      const actual = m.fib2(c.case)
      assert.equal(actual, c.expected)
    }
  })

  it('is fast', () => {
    const cases = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    for (const n of cases) {
      const start1 = Date.now()
      const res1 = m.fib(n)
      const end1 = Date.now()
      const elapsed1 = (end1 - start1)

      const start2 = Date.now()
      const res2 = m.fib2(n)
      const end2 = Date.now()
      const elapsed2 = (end2 - start2)

      assert.equal(res1, res2)

      console.log(`case: ${n}`)
      console.log(`logic01: ${elapsed1.toPrecision(5)} required`)
      console.log(`logic02: ${elapsed2.toPrecision(5)} required`)
    }
  })

})

