var Buffer = require('safe-buffer').Buffer
var alts = require('./alts.js')
// annoyingly, this is for browserify
var coins = [
  require('./coins/blk'),
  require('./coins/btc'),
  require('./coins/btg'),
  require('./coins/dash'),
  require('./coins/dcr'),
  require('./coins/dgb'),
  require('./coins/doge'),
  require('./coins/ltc'),
  require('./coins/mona'),
  require('./coins/nbt'),
  require('./coins/nmc'),
  require('./coins/ppc'),
  require('./coins/qtum'),
  require('./coins/rdd'),
  require('./coins/vtc'),
  require('./coins/zec')
]

var extraCoins = []

alts.forEach(alt => {
  if (!alt.isEthereum) {
    extraCoins.push(toCoinInfo(alt))
  }
  //console.log(toCoinInfo(alt))
})

coins = extraCoins

var supportedCoins = {}

coins.forEach(function (coin) {
  //console.log('wtf', coin)
  var unit = coin.main.unit.toLowerCase()
  var name = coin.main.name.toLowerCase()

  coin.main.testnet = false
  coin.main.toBitcoinJS = toBitcoinJS.bind(coin.main)
  coin.main.toBitcore = toBitcore.bind(coin.main)
  //supportedCoins[unit] = coin.main
  supportedCoins[name] = coin.main

  /* if (coin.test) {
    coin.test.testnet = true
    coin.test.toBitcoinJS = toBitcoinJS.bind(coin.test)
    coin.test.toBitcore = toBitcore.bind(coin.test)
    supportedCoins[unit + '-test'] = coin.test
    supportedCoins[name + '-test'] = coin.test
  }

  if (coin.regtest) {
    coin.regtest.testnet = true
    coin.regtest.toBitcoinJS = toBitcoinJS.bind(coin.regtest)
    coin.regtest.toBitcore = toBitcore.bind(coin.regtest)
    supportedCoins[unit + '-regtest'] = coin.regtest
    supportedCoins[name + '-regtest'] = coin.regtest
  } */
})

function coininfo (input) {
  var coin = input.toLowerCase()

  if (!(coin in supportedCoins)) {
    return null
  } else {
    return supportedCoins[coin]
  }
}

coins.forEach(function (coin) {
  coininfo[coin.main.name.toLowerCase()] = coin
})

function toBitcoinJS () {
  return Object.assign({}, this, {
    messagePrefix: null, // TODO
    bip32: {
      public: this.versions.bip32.public,
      private: this.versions.bip32.private
    },
    pubKeyHash: this.versions.public,
    scriptHash: this.versions.scripthash,
    wif: this.versions.private,
    dustThreshold: null // TODO
  })
}

function toBitcore () {
  // reverse magic
  var nm = Buffer.allocUnsafe(4)
  nm.writeUInt32BE(this.protocol ? this.protocol.magic : 0, 0)
  nm = nm.readUInt32LE(0)

  return Object.assign({}, this, {
    name: this.testnet ? 'testnet' : 'livenet',
    alias: this.testnet ? 'testnet' : 'mainnet',
    pubkeyhash: this.versions.public,
    privatekey: this.versions.private,
    scripthash: this.versions.scripthash,
    xpubkey: this.versions.bip32.public,
    xprivkey: this.versions.bip32.private,
    networkMagic: nm,
    port: this.port,
    dnsSeeds: this.seedsDns || []
  })
}

function toCoinInfo(coin) {
  var template = {
    port: 0,
    protocol: { magic: 0 },
    seedsDns: [],
    versions: {
      bip32: { private: 0, public: 0 },
      bip44: 0,
      scripthash: 0,
      scripthash2: 0
    },
    name: '',
    testnet: false,
    unit: ''
  }
    var coinCheck = alreadyCoin(coin)
    if (!coinCheck.found) {
        var info = JSON.parse(JSON.stringify(template))
        info.versions.private = coin.privateKeyPrefix
        info.versions.public = coin.networkVersion
        info.versions.bip32.private = coin.versions.bip32.private
        info.versions.bip32.public = coin.versions.bip32.public
        info.name = coin.name 
        info.unit = coin.unit
        return {main: info}
    } else {
        return coinCheck.filter[0]
    }
    
}
function alreadyCoin(coin) {
    var filter = coins.filter(info=> {return info.main.name.toLowerCase() == coin.name.toLowerCase()})
    var found = filter.length > 0
    return {filter: filter, found: found}
}

module.exports = {supportedCoins:supportedCoins, coininfo:coininfo}