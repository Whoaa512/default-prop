var defaultProp = require('./')
  , assert = require('assert')

describe('default prop', function() {
  it('should give objects a default value', function() {
    var accounts = [{
        name: 'alice',
        inUse: true
      },{
        name: 'bob'
      },{
        name: 'charlie'
      }]
    accounts.forEach(defaultProp('inUse', false))
    assert.equal(accounts[0].inUse, true)
    assert.equal(accounts[1].inUse, false)
  })
})
