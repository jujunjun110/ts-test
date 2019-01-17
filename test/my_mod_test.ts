import * as chai from 'chai'

import MyMod from '../src/js/my_mod'

const m = new MyMod()

describe('MyMod Instance', () => {
  it('create correct message', () => {
    chai.assert.equal(m.message(), 'hello')
  })
})
