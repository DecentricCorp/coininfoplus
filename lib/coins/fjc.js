/*
  info from:
    https://github.com/fujicoin/fujicoin/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Fujicoin',
  per1: 1e8,
  unit: 'FJC'
}

var main = Object.assign({}, {
  hashGenesisBlock: 'adb6d9cfd74075e7f91608add4bd2a2ea636f70856183086842667a1597714a0',
  // nDefaultPort
  port: 3777,
  portRpc: 3776,
  protocol: {
    // pchMessageStart
    magic: 0x696a7566 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'seed1.fujicoin.org',
    'seed2.fujicoin.org',
    'pool1.fujicoin.org',
    'pool2.fujicoin.org',
    'pool3.fujicoin.org',
    'pool4.fujicoin.org'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 75,
    private: 0xa4,
    public: 0x24,
    scripthash: 0x10
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '96bd214d68bcbfe9c786c4da26cf71fb6bbb6f24032065bdf2f4cd2b003d9c72',
  port: 13777,
  portRpc: 13776,
  protocol: {
    magic: 0x66756a69
  },
  seedsDns: [
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xca,
    public: 0x4a,
    scripthash: 0xc4
  }
}, common)

var regtest = Object.assign({}, {
  hashGenesisBlock: '96bd214d68bcbfe9c786c4da26cf71fb6bbb6f24032065bdf2f4cd2b003d9c72',
  port: 16777,
  portRpc: 16776,
  protocol: {
    magic: 0x66756a69
  },
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main
}
