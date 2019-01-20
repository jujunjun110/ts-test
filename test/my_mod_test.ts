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
})

