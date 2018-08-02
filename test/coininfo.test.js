let chai = require('chai')
let expect = chai.expect
let coininfo = require('../lib/coininfo')
describe('coininfoplus', () => {
  it('creates 268 coins', function(){
    expect(Object.keys(coininfo.supportedCoins).length).to.eq(268)
  })
})