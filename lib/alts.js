var janin = {};
var networks = [

    {
        name: "Auroracoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.auroracoin;
            coin.versions.bip44 =85; return coin
        },
    },
    {
        name: "Bata",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.batacoin;
            coin.versions.bip44 =89; return coin
        },
    },
    {
        name: "Bitcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoin;
            coin.versions.bip44 =0; return coin
        },
    },
    {
        name: "BitcoinCash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoincash;
            coin.versions.bip44 =145; return coin
        },
    },
    {
        name: "BitcoinGold",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoingold;
            coin.versions.bip44 =156; return coin
        },
    },
    {
        name: "Blackcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.blackcoin;
            coin.versions.bip44 =10; return coin
        },
    },
    {
        name: "Bitcoin Testnet",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.testnet;
            coin.versions.bip44 =1; return coin
        },
    },
    {
        name: "Clams",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.clam;
            coin.versions.bip44 =23; return coin
        },
    },
    {
        name: "Dash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.dash;
            coin.versions.bip44 =5; return coin
        },
    },
    {
        name: "Dogecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.dogecoin;
            coin.versions.bip44 =3; return coin
        },
    },
    {
        name: "NuBits",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.nubits;
            coin.versions.bip44 =12; return coin
        },
    },
    {
        name: "NuShares",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.nushares;
            coin.versions.bip44 =11; return coin
        },
    },
    {
        name: "Litecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.litecoin;
            coin.versions.bip44 =2; return coin
        },
    },
    {
        name: "Potcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.potcoin;
            coin.versions.bip44 =81; return coin
        },
    },
    {
        name: "Feathercoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.feathercoin;
            coin.versions.bip44 =8; return coin
        },
    },
    {
        name: "Gridcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.gridcoin;
            coin.versions.bip44 =84; return coin
        },
    },
    {
        name: "Novacoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.novacoin;
            coin.versions.bip44 =50; return coin
        },
    },
    {
        name: "Cannacoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.cannacoin;
            coin.versions.bip44 =19; return coin
        },
    },
    {
         name: "Kobocoin",
         attachCoinPath: function(coin) {
            //network =bitcoin.networks.kobocoin;
            coin.versions.bip44 =196; return coin
        },
    },
    {
         name: "Komodo",
         attachCoinPath: function(coin) {
            //network =bitcoin.networks.komodo;
            coin.versions.bip44 =141; return coin
        },
    },
    {
        name: "Callisto",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.clo;
            coin.versions.bip44 =820; return coin
        },
    },
    {
        name: "Clubcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.clubcoin;
            coin.versions.bip44 =79; return coin
        },
    },
    {
        name: "Digibyte",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.digibyte;
            coin.versions.bip44 =20; return coin
        },
    },
    {
        name: "Digitalcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.digitalcoin;
            coin.versions.bip44 =18; return coin
        },
    },
    {
        name: "EDRCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.edrcoin;
            coin.versions.bip44 =56; return coin
        },
    },
    {
        name: "E-Gulden",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.egulden;
            coin.versions.bip44 =78; return coin
        },
    },
    {
        name: "Gulden",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.gulden;
            coin.versions.bip44 =87; return coin
        },
    },
    {
        name: "GCRCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.gcrcoin;
            coin.versions.bip44 =49; return coin
        },
    },
    {
        name: "Jumbucks",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.jumbucks;
            coin.versions.bip44 =26; return coin
        },
    },
    {
        name: "Monacoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.monacoin;
            coin.versions.bip44 =22; return coin
        },
    },
    {
        name: "Myriadcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.myriadcoin;
            coin.versions.bip44 =90; return coin
        },
    },
    {
        name: "Neoscoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.neoscoin;
            coin.versions.bip44 =25; return coin
        },
    },
    {
        name: "ParkByte",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.parkbyte;
            coin.versions.bip44 =36; return coin
        },
    },
    {
        name: "Peercoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.peercoin;
            coin.versions.bip44 =6; return coin
        },
    },
    {
        name: "Pesobit",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.pesobit;
            coin.versions.bip44 =62; return coin
        },
    },
    {
        name: "Primecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.primecoin;
            coin.versions.bip44 =24; return coin
        },
    },
    {
        name: "Reddcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.reddcoin;
            coin.versions.bip44 =4; return coin
        },
    },
    {
        name: "Rubycoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.rubycoin;
            coin.versions.bip44 =16; return coin
        },
    },
            {
        name: "ShadowCash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.shadow;
            coin.versions.bip44 =35; return coin
        },
    },
    {
        name: "ShadowCash Testnet",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.shadowtn;
            coin.versions.bip44 =1; return coin
        },
    },
    {
        name: "Smileycoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.smileycoin;
            coin.versions.bip44 =59; return coin
        },
    },
    {
        name: "Solarcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.solarcoin;
            coin.versions.bip44 =58; return coin
        },
    },
    {
        name: "Syscoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.syscoin;
            coin.versions.bip44 =57; return coin
        },
    },
    {
        name: "Unobtanium",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.unobtanium;
            coin.versions.bip44 =92; return coin
        },
    },
    {
        name: "Vergecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.vergecoin;
            coin.versions.bip44 =77; return coin
        },
    },
    {
        name: "Vertcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.vertcoin;
            coin.versions.bip44 =28; return coin
        },
    },
            {
        name: "Viacoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.viacoin;
            coin.versions.bip44 =14; return coin
        },
    },
    {
        name: "Viacoin Testnet",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.viacointestnet;
            coin.versions.bip44 =1; return coin
        },
    },
    {
        name: "Vpncoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.vpncoin;
            coin.versions.bip44 =33; return coin
        },
    },
    {
        name: "Richcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.richcoin;
            coin.versions.bip44 =80; return coin
        },
    },
    {
        name: "Ethereum",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.eth;
            coin.versions.bip44 =60; return coin
        },
    },
    {
        name: "Ethereum Classic",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.etc;
            coin.versions.bip44 =61; return coin
        },
    },
    {
        name: "PIVX",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.pivx;
            coin.versions.bip44 =119; return coin
        },
    },
    {
        name: "Abncoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.abncoin;
            coin.versions.bip44 =141; return coin
        },
    },
    {
        name: "Asiancoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.asiacoin;
            coin.versions.bip44 =51; return coin
        },
    },
    {
        name: "BitcoinPlus",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoinplus;
            coin.versions.bip44 =65; return coin
        },
    },
    {
        name: "Canada eCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.canadaecoin;
            coin.versions.bip44 =34; return coin
        },
    },
    {
        name: "Einsteinium",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.einsteinium;
            coin.versions.bip44 =41; return coin
        },
    },
    {
        name: "Expanse",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.expanse;
            coin.versions.bip44 =40; return coin
        },
    },
    {
        name: "Gamecredits",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.gamecredits;
            coin.versions.bip44 =101; return coin
        },
    },
    {
        name: "Internet of People",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.iop;
            coin.versions.bip44 =66; return coin
        },
    },
    {
        name: "IXCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.ixcoin;
            coin.versions.bip44 =86; return coin
        },
    },
    {
        name: "Landcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.landcoin;
            coin.versions.bip44 =63; return coin
        },
    },
    {
        name: "Namecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.namecoin;
            coin.versions.bip44 =7; return coin
        },
    },
    {
        name: "Navcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.navcoin;
            coin.versions.bip44 =130; return coin
        },
    },
    {
        name: "OKCash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.okcash;
            coin.versions.bip44 =69; return coin
        },
    },
    {
        name: "POSWcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.posw;
            coin.versions.bip44 =47; return coin
        },
    },
    {
        name: "Stratis",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.stratis;
            coin.versions.bip44 =105; return coin
        },
    },
    {
        name: "ZCash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.zcash;
            coin.versions.bip44 =133; return coin
        },
    },
    {
        name: "Bela",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bela;
            coin.versions.bip44 =73; return coin
        },
    },
    {
        name: "Britcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.britcoin;
            coin.versions.bip44 =70; return coin
        },
    },
    {
        name: "Compcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.compcoin;
            coin.versions.bip44 =74; return coin
        },
    },
    {
        name: "LBRY",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.lbry;
            coin.versions.bip44 =140; return coin
        },
    },
    {
        name: "ZCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.zcoin;
            coin.versions.bip44 =136; return coin
        },
    },
    {
        name: "Insane",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.insane;
            coin.versions.bip44 =68; return coin
        },
    },
    {
        name: "Ultimatesecurecash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.ultimatesecurecash;
            coin.versions.bip44 =112; return coin
        },
    },
    {
        name: "Neurocoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.neurocoin;
            coin.versions.bip44 =110; return coin
        },
    },
    {
        name: "Hempcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.hempcoin;
            coin.versions.bip44 =113; return coin
        },
    },
    {
        name: "Linxcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.linxcoin;
            coin.versions.bip44 =114; return coin
        },
    },
    {
        name: "Ecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.ecoin;
            coin.versions.bip44 =115; return coin
        },
    },
    {
        name: "Denarius",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.denarius;
            coin.versions.bip44 =116; return coin
        },
    },
    {
        name: "Pinkcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.pinkcoin;
            coin.versions.bip44 =117; return coin
        },
    },
    {
        name: "Flashcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.flashcoin;
            coin.versions.bip44 =120; return coin
        },
    },
    {
        name: "Defcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.defcoin;
            coin.versions.bip44 =1337; return coin
        },
    },
    {
        name: "Zencash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.zencash;
            coin.versions.bip44 =121; return coin
        },
    },
    {
        name: "Putincoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.putincoin;
            coin.versions.bip44 =122; return coin
        },
    },/*
    {
        name: "Smartcash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.smartcash;
            coin.versions.bip44 =224; return coin
        },
    },*/
    {
        name: "Fujicoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.fujicoin;
            coin.versions.bip44 =75; return coin
        },
    },
    {
        name: "Mix",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.mix;
            coin.versions.bip44 =76; return coin
        },
    },
    {
        name: "Voxels",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.voxels;
            coin.versions.bip44 =129; return coin
        },
    },
    {
        name: "Crown",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.crown;
            coin.versions.bip44 =72; return coin
        },
    },
    {
        name: "Vcash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.vcash;
            coin.versions.bip44 =127; return coin
        },
    },
    {
        name: "Bridgecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bridgecoin;
            coin.versions.bip44 =162; return coin
        },
    },
    {
        name: "Bitsend",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitsend;
            coin.versions.bip44 =91; return coin
        },
    },
    {
        name: "Bitcore",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcore;
            coin.versions.bip44 =160; return coin
        },
    },
    {
        name: "Europecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.europecoin;
            coin.versions.bip44 =151; return coin
        },
    },
    {
        name: "Toacoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.toacoin;
            coin.versions.bip44 =159; return coin
        },
    },
    {
        name: "Diamond",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.diamond;
            coin.versions.bip44 =152; return coin
        },
    },
    {
        name: "Adcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.adcoin;
            coin.versions.bip44 =161; return coin
        },
    },
    {
        name: "Helleniccoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.helleniccoin;
            coin.versions.bip44 =168; return coin
        },
    },
    {
        name: "Firstcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.firstcoin;
            coin.versions.bip44 =167; return coin
        },
    },
    {
        name: "Vivo",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.vivo;
            coin.versions.bip44 =166; return coin
        },
    },
    {
        name: "Whitecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.whitecoin;
            coin.versions.bip44 =155; return coin
        },
    },
    {
        name: "Gobyte",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.gobyte;
            coin.versions.bip44 =176; return coin
        },
    },/*
    {
        name: "Groestlcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.groestlcoin;
            coin.versions.bip44 =17; return coin
        },
    },*/
    {
        name: "Newyorkcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.newyorkcoin;
            coin.versions.bip44 =179; return coin
        },
    },
    {
        name: "Omni",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.omni;
            coin.versions.bip44 =200; return coin
        },
    },
    {
        name: "Tether",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.tether;
            coin.versions.bip44 =200; return coin
        },
    },
    {
        name: "BitcoinZ",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoinz;
            coin.versions.bip44 =177; return coin
        },
    },
    {
        name: "Poa",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.poa;
            coin.versions.bip44 =178; return coin
        },
    },
    {
        name: "BitcoinAtom",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoinatom;
            coin.versions.bip44 =185; return coin
        },
    },
    {
        name: "Crave",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.crave;
            coin.versions.bip44 =186; return coin
        },
    },
    {
        name: "ExclusiveCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.exclusivecoin;
            coin.versions.bip44 =190; return coin
        },
    },
    {
        name: "Lynx",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.lynx;
            coin.versions.bip44 =191; return coin
        },
    },
    {
        name: "Minexcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.minexcoin;
            coin.versions.bip44 =182; return coin
        },
    },
    {
        name: "Musicoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.musicoin;
            coin.versions.bip44 =184; return coin
        },
    },
    {
        name: "Wincoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.wincoin;
            coin.versions.bip44 =181; return coin
        },
    },
    {
        name: "Zclassic",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.zclassic;
            coin.versions.bip44 =147; return coin
        },
    },
    {
        name: "Litecoincash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.litecoincash;
            coin.versions.bip44 =192; return coin
        },
    },
    {
        name: "BitcoinPrivate",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoinprivate;
            coin.versions.bip44 =183; return coin
        },
    },
]  
janin.currency = {
    createCurrency: function (unit, name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, isPublic, isPrivate, msg, ethereum) {
        var networkCoinPath = networks.filter(function(network){return network.name.toLocaleLowerCase() === name})
        //console.log("COIN PATH", networkCoinPath, name)
        var currency = {};
        currency.unit = unit
        currency.name = name;
        currency.networkVersion = networkVersion;
        currency.privateKeyPrefix = privateKeyPrefix;
        currency.WIF_Start = WIF_Start;
        currency.CWIF_Start = CWIF_Start;
        currency.versions = {bip32:{}}
        currency.versions.bip32.public = isPublic
        currency.versions.bip32.private = isPrivate
        currency.public = networkVersion
        currency.private = privateKeyPrefix
        currency.scripthash = WIF_Start
        currency.isEthereum = ethereum
        currency.msgStart = msg
        currency.messagePrefix = msg
        if (networkCoinPath.length > 0){
            currency = networkCoinPath[0].attachCoinPath(currency)
        } else {
            currency.versions.bip44 = 0
        }
        return currency;
    },
    name: function() {
        return janin.selectedCurrency.name;
    },

    networkVersion: function() {
        return janin.selectedCurrency.networkVersion;
    },

    privateKeyPrefix: function() {
        return janin.selectedCurrency.privateKeyPrefix;
    },

    WIF_RegEx: function() {
        return new RegExp("^" + janin.selectedCurrency.WIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$");
    },

    CWIF_RegEx: function() {
        return new RegExp("^" + janin.selectedCurrency.CWIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$");
    },
};

janin.currencies = [
    janin.currency.createCurrency("2give","2give",39,167,6,null,null,null,null,false),
    janin.currency.createCurrency("42","42coin",8,136,5,null,null,null,null,false),
    janin.currency.createCurrency("abncoin","abncoin",25,153,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("acoin","acoin",23,230,8,null,null,null,null,false),
    janin.currency.createCurrency("adcoin","adcoin",23,151,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("aga","agacoin",83,211,8,null,null,null,null,false),
    janin.currency.createCurrency("alf","alphacoin",82,210,8,null,null,null,null,false),
    janin.currency.createCurrency("alqo","alqo",23,193,7,null,null,null,null,false),
    janin.currency.createCurrency("ani","animecoin",23,151,6,null,null,null,null,false),
    janin.currency.createCurrency("anc","anoncoin",23,151,6,null,null,null,null,false),
    janin.currency.createCurrency("apex","apexcoin",23,151,6,null,null,null,null,false),
    janin.currency.createCurrency("arco","aquariuscoin",23,151,6,null,null,null,null,false),
    janin.currency.createCurrency("asiacoin","asiacoin",23,151,8,null,76067358,76066276,null,false),
    janin.currency.createCurrency("aur","auroracoin",23,151,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("axe","axe",75,203,7,null,null,null,null,false),
    janin.currency.createCurrency("batacoin","batacoin",25,153,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bqc","bbqcoin",85,213,6,null,null,null,null,false),
    janin.currency.createCurrency("bela","bela",25,153,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bbp","biblepay",25,182,7,null,null,null,null,false),
    janin.currency.createCurrency("brd","birdcoin",47,175,6,null,null,null,null,false),
    janin.currency.createCurrency("BTC","Bitcoin",0,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bitcoinatom","bitcoinatom",23,128,10,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bch","bitcoincash",0,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("btcd","bitcoindark",60,188,7,null,null,null,null,false),
    janin.currency.createCurrency("btg","bitcoingold",38,128,23,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bitcoinplus","bitcoinplus",25,153,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("btcp","bitcoinprivate",4901,128,5039,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bitcoinz","bitcoinz",7352,128,7357,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bitcore","bitcore",0,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bitsend","bitsend",102,204,5,null,50221816,50221772,null,false),
    janin.currency.createCurrency("synq","bitsynq",63,191,7,null,null,null,null,false),
    janin.currency.createCurrency("zny","bitzeny",81,128,5,null,null,null,null,false),
    janin.currency.createCurrency("BLK","BlackCoin",25,153,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("jack","blackjack",21,149,56,null,null,null,null,false),
    janin.currency.createCurrency("block","blocknet",26,154,6,null,null,null,null,false),
    janin.currency.createCurrency("boli","bolivarcoin",85,213,8,null,null,null,null,false),
    janin.currency.createCurrency("boxy","boxycoin",75,203,7,null,null,null,null,false),
    janin.currency.createCurrency("bridgecoin","bridgecoin",27,176,50,null,76067358,76066276,null,false),
    janin.currency.createCurrency("britcoin","britcoin",25,153,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bun","bunnycoin",26,154,6,null,null,null,null,false),
    janin.currency.createCurrency("c2","c2coin",28,156,6,null,null,null,null,false),
    janin.currency.createCurrency("cage","cagecoin",31,159,6,null,null,null,null,false),
    janin.currency.createCurrency("cmpco","campuscoin",28,156,6,null,null,null,null,false),
    janin.currency.createCurrency("cdn","canadaecoin",28,156,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("cann","cannabiscoin",28,156,6,null,null,null,null,false),
    janin.currency.createCurrency("cannacoin","cannacoin",28,156,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("cpc","capricoin",28,156,6,null,null,null,null,false),
    janin.currency.createCurrency("cash","cashcoin",34,162,6,null,null,null,null,false),
    janin.currency.createCurrency("cdt","cassubiandetk",30,158,6,null,null,null,null,false),
    janin.currency.createCurrency("cat","catcoin",21,149,56,null,null,null,null,false),
    janin.currency.createCurrency("chc","chaincoin",28,156,6,null,null,null,null,false),
    janin.currency.createCurrency("clam","clam",137,null,133,null,2831314276,2831251494,null,false),
    janin.currency.createCurrency("clo","clo",255,255,null,null,4294967295,null,null,false),
    janin.currency.createCurrency("clubcoin","clubcoin",28,153,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("colx","colossuscoinxt",30,212,5,null,null,null,null,false),
    janin.currency.createCurrency("compcoin","compcoin",28,156,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("rain","condensate",60,188,7,null,null,null,null,false),
    janin.currency.createCurrency("xcpo","copico",28,144,5,null,null,null,null,false),
    janin.currency.createCurrency("copper","coppercoin",28,156,6,null,null,null,null,false),
    janin.currency.createCurrency("corg","corgicoin",28,156,6,null,null,null,null,false),
    janin.currency.createCurrency("coval","coval",0,128,5,null,null,null,null,false),
    janin.currency.createCurrency("crave","crave",70,153,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("crown","crown",0,128,28,null,76067358,76066276,null,false),
    janin.currency.createCurrency("cbx","cryptobullion",11,139,5,null,null,null,null,false),
    janin.currency.createCurrency("ccb","cryptoclub",35,163,6,null,null,null,null,false),
    janin.currency.createCurrency("cesc","cryptoescudo",28,156,6,null,null,null,null,false),
    janin.currency.createCurrency("xcn","cryptonite",28,128,5,null,null,null,null,false),
    janin.currency.createCurrency("cwis","cryptowisdomcoin",73,135,5,null,null,null,null,false),
    janin.currency.createCurrency("DASH","Dash",76,204,16,null,76067358,76066276,null,false),
    janin.currency.createCurrency("deaf","deafdollars",48,176,6,null,null,null,null,false),
    janin.currency.createCurrency("onion","deeponion",31,159,6,null,null,null,null,false),
    janin.currency.createCurrency("defcoin","defcoin",30,158,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("denarius","denarius",30,158,90,null,76067358,76066276,null,false),
    janin.currency.createCurrency("dem","deutsche emark",53,181,7,null,null,null,null,false),
    janin.currency.createCurrency("dvc","devcoin",0,128,5,null,null,null,null,false),
    janin.currency.createCurrency("diamond","diamond",90,218,8,null,76067358,76066276,null,false),
    janin.currency.createCurrency("DGB","DigiByte",30,128,5,null,null,null,null,false),
    janin.currency.createCurrency("dgc","digitalcoin",30,158,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("dime","dimecoin",15,143,5,null,null,null,null,false),
    janin.currency.createCurrency("note","dnotes",31,159,6,null,null,null,null,false),
    janin.currency.createCurrency("DOGE","Dogecoin",30,158,22,null,49990397,49988504,null,false),
    janin.currency.createCurrency("xvg","dogecoindark",30,158,6,null,null,null,null,false),
    janin.currency.createCurrency("ecoin","ecoin",92,220,20,null,76067358,76066276,null,false),
    janin.currency.createCurrency("edrcoin","edrcoin",93,221,28,null,76067358,76066276,null,false),
    janin.currency.createCurrency("efl","egulden",48,176,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("einsteinium","einsteinium",33,161,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("krn","ekrona",45,173,6,null,null,null,null,false),
    janin.currency.createCurrency("eca","electra",33,161,6,null,null,null,null,false),
    janin.currency.createCurrency("emb","ember",92,50,2,null,null,null,null,false),
    janin.currency.createCurrency("emd","emerald",34,162,6,null,null,null,null,false),
    janin.currency.createCurrency("emc","emercoin",33,128,5,null,null,null,null,false),
    janin.currency.createCurrency("enrg","energycoin",92,220,8,null,null,null,null,false),
    janin.currency.createCurrency("esp","espers",33,144,5,null,null,null,null,false),
    janin.currency.createCurrency("europecoin","europecoin",33,168,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("exclusivecoin","exclusivecoin",33,161,137,null,76067358,76066276,null,false),
    janin.currency.createCurrency("expanse","expanse",255,255,null,null,4294967295,null,null,false),
    janin.currency.createCurrency("fst","fastcoin",96,224,8,null,null,null,null,false),
    janin.currency.createCurrency("ftc","feathercoin",14,142,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("tips","fedoracoin",33,128,5,null,null,null,null,false),
    janin.currency.createCurrency("fibre","fibre",35,163,6,null,null,null,null,false),
    janin.currency.createCurrency("firstcoin","firstcoin",35,163,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("flashcoin","flashcoin",68,196,130,null,76067358,76066276,null,false),
    janin.currency.createCurrency("flo","florincoin",35,176,6,null,null,null,null,false),
    janin.currency.createCurrency("flb","flurbo",35,48,6,null,null,null,null,false),
    janin.currency.createCurrency("flt","fluttercoin",35,163,6,null,null,null,null,false),
    janin.currency.createCurrency("fraz","frazcoin",35,163,6,null,null,null,null,false),
    janin.currency.createCurrency("frc","freicoin",0,128,5,null,null,null,null,false),
    janin.currency.createCurrency("fud","fudcoin",35,163,6,null,null,null,null,false),
    janin.currency.createCurrency("fc2","fuelcoin",36,128,5,null,null,null,null,false),
    janin.currency.createCurrency("fjc","fujicoin",36,164,16,null,76067358,76066276,null,false),
    janin.currency.createCurrency("gbn","gabencoin",16,144,5,null,null,null,null,false),
    janin.currency.createCurrency("gamecredits","gamecredits",38,166,5,null,27108450,27106558,null,false),
    janin.currency.createCurrency("grlc","garlicoin",38,176,6,null,null,null,null,false),
    janin.currency.createCurrency("gcrcoin","gcrcoin",38,154,97,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bsty","globalboost",38,166,6,null,null,null,null,false),
    janin.currency.createCurrency("gobyte","gobyte",38,198,10,null,76067358,76066276,null,false),
    janin.currency.createCurrency("good","goodcoin",38,166,6,null,null,null,null,false),
    janin.currency.createCurrency("gridcoin","gridcoin",62,190,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("grc","gridcoinresearch",62,190,7,null,null,null,null,false),
    janin.currency.createCurrency("groestlcoin","groestlcoin",36,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("nlg","gulden",38,166,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("gun","guncoin",39,167,6,null,null,null,null,false),
    janin.currency.createCurrency("ham","hamradiocoin",0,128,5,null,null,null,null,false),
    janin.currency.createCurrency("Helleniccoin","Helleniccoin",48,176,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("hempcoin","hempcoin",40,168,8,null,76067358,76066276,null,false),
    janin.currency.createCurrency("hfr","hfrcoin",16,144,5,null,null,null,null,false),
    janin.currency.createCurrency("hodl","hodlcoin",40,168,5,null,null,null,null,false),
    janin.currency.createCurrency("html","htmlcoin",41,169,6,null,null,null,null,false),
    janin.currency.createCurrency("hyp","hyperstake",117,245,9,null,null,null,null,false),
    janin.currency.createCurrency("icash","icash",102,204,7,null,null,null,null,false),
    janin.currency.createCurrency("mprm","imperiumcoin",48,176,6,null,null,null,null,false),
    janin.currency.createCurrency("nka","incakoin",53,181,7,null,null,null,null,false),
    janin.currency.createCurrency("icg","incognitocoin",0,128,5,null,null,null,null,false),
    janin.currency.createCurrency("infx","influxcoin",102,230,8,null,null,null,null,false),
    janin.currency.createCurrency("insane","insane",102,55,57,null,76067358,76066276,null,false),
    janin.currency.createCurrency("iop","iop",117,49,174,null,662737247,2922649334,null,false),
    janin.currency.createCurrency("ird","iridiumcoin",48,176,6,null,null,null,null,false),
    janin.currency.createCurrency("ixc","ixcoin",138,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("judge","judgecoin",43,171,6,null,null,null,null,false),
    janin.currency.createCurrency("jumbucks","jumbucks",43,171,5,null,58353818,58352736,null,false),
    janin.currency.createCurrency("khc","khcoin",48,176,6,null,null,null,null,false),
    janin.currency.createCurrency("meow","kittehcoin",45,173,6,null,null,null,null,false),
    janin.currency.createCurrency("kobocoin","kobocoin",35,163,28,null,76067358,76066276,null,false),
    janin.currency.createCurrency("komodo","komodo",60,188,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("lana","lanacoin",48,176,6,null,null,null,null,false),
    janin.currency.createCurrency("landcoin","landcoin",48,176,122,null,76067358,76066276,null,false),
    janin.currency.createCurrency("lat","latium",23,128,5,null,null,null,null,false),
    janin.currency.createCurrency("lbry","lbry",85,28,122,null,27014479,27013400,null,false),
    janin.currency.createCurrency("lbry","lbry credits",85,128,5,null,null,null,null,false),
    janin.currency.createCurrency("linxcoin","linxcoin",75,203,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("LTC","Litecoin",48,176,50,null,27108450,27106558,null,false),
    janin.currency.createCurrency("litecoincash","litecoincash",28,176,50,null,76067358,76066276,null,false),
    janin.currency.createCurrency("ldoge","litedoge",90,171,6,null,null,null,null,false),
    janin.currency.createCurrency("lmc","lomocoin",48,176,6,null,null,null,null,false),
    janin.currency.createCurrency("lynx","lynx",45,173,50,null,76067358,76066276,null,false),
    janin.currency.createCurrency("mbyt","madbytecoin",50,110,4,null,null,null,null,false),
    janin.currency.createCurrency("mim","magicinternetmoney",48,176,6,null,null,null,null,false),
    janin.currency.createCurrency("xmg","magicoin",20,148,5,null,null,null,null,false),
    janin.currency.createCurrency("mars","marscoin",50,178,6,null,null,null,null,false),
    janin.currency.createCurrency("mxt","martexcoin",50,178,6,null,null,null,null,false),
    janin.currency.createCurrency("MDOGE","masterdoge",51,139,5,null,null,null,null,false),
    janin.currency.createCurrency("mzc","mazacoin",50,224,8,null,null,null,null,false),
    janin.currency.createCurrency("mec","megacoin",50,178,6,null,null,null,null,false),
    janin.currency.createCurrency("minexcoin","minexcoin",75,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("mint","mintcoin",51,179,67,null,null,null,null,false),
    janin.currency.createCurrency("mobi","mobiuscoin",0,128,5,null,null,null,null,false),
    janin.currency.createCurrency("MONA","Monacoin",50,176,55,null,76067358,76066276,null,false),
    janin.currency.createCurrency("mu","monetaryunit",16,126,5,null,null,null,null,false),
    janin.currency.createCurrency("mon","monocle",50,178,6,null,null,null,null,false),
    janin.currency.createCurrency("moon","mooncoin",3,131,5,null,null,null,null,false),
    janin.currency.createCurrency("xmy","myriadcoin",50,178,9,null,76067358,76066276,null,false),
    janin.currency.createCurrency("NMC","Namecoin",52,180,5,null,null,null,null,false),
    janin.currency.createCurrency("nav","navcoin",53,150,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("ndc","needlecoin",53,181,7,null,null,null,null,false),
    janin.currency.createCurrency("neet","neetcoin",53,181,7,null,null,null,null,false),
    janin.currency.createCurrency("neos","neoscoin",53,177,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("neurocoin","neurocoin",53,181,117,null,76067358,76066276,null,false),
    janin.currency.createCurrency("neva","nevacoin",53,177,6,null,null,null,null,false),
    janin.currency.createCurrency("newyorkcoin","newyorkcoin",60,188,22,null,76067358,76066276,null,false),
    janin.currency.createCurrency("nvc","novacoin",8,136,20,null,76067358,76066276,null,false),
    janin.currency.createCurrency("NBT","NuBits",25,150,26,null,76067358,76066276,null,false),
    janin.currency.createCurrency("nushares","nushares",63,149,64,null,76067358,76066276,null,false),
    janin.currency.createCurrency("nyan","nyancoin",45,173,6,null,null,null,null,false),
    janin.currency.createCurrency("nyc","nyc",60,188,7,null,null,null,null,false),
    janin.currency.createCurrency("ocupy","ocupy",115,243,9,null,null,null,null,false),
    janin.currency.createCurrency("okcash","okcash",55,183,28,null,63710167,63708275,null,false),
    janin.currency.createCurrency("omni","omni",0,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("omc","omnicoin",115,243,9,null,null,null,null,false),
    janin.currency.createCurrency("onyx","onyxcoin",115,243,9,null,null,null,null,false),
    janin.currency.createCurrency("pac","paccoin",24,152,6,null,null,null,null,false),
    janin.currency.createCurrency("pnd","pandacoin",55,183,7,null,null,null,null,false),
    janin.currency.createCurrency("pkb","parkbyte",55,183,28,null,76067358,76066276,null,false),
    janin.currency.createCurrency("part","particl",56,108,4,null,null,null,null,false),
    janin.currency.createCurrency("xpy","paycoin",55,183,7,null,null,null,null,false),
    janin.currency.createCurrency("PPC","Peercoin",68,196,5,null,null,null,null,false),
    janin.currency.createCurrency("ptc","pesetacoin",47,175,6,null,null,null,null,false),
    janin.currency.createCurrency("pesobit","pesobit",55,183,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("phc","phcoin",55,183,7,null,null,null,null,false),
    janin.currency.createCurrency("pxc","phoenixcoin",56,184,7,null,null,null,null,false),
    janin.currency.createCurrency("piggy","piggycoin",118,246,9,null,null,null,null,false),
    janin.currency.createCurrency("pink","pinkcoin",3,131,28,null,76067358,76066276,null,false),
    janin.currency.createCurrency("pivx","pivx",30,212,13,null,36513075,35729707,null,false),
    janin.currency.createCurrency("posw","posw",55,183,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("pot","potcoin",55,183,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("xpm","primecoin",23,151,83,null,76067358,76066276,null,false),
    janin.currency.createCurrency("prc","prospercoinclassic",58,186,7,null,null,null,null,false),
    janin.currency.createCurrency("putincoin","putincoin",55,183,20,null,76067358,76066276,null,false),
    janin.currency.createCurrency("qrk","quark",58,186,7,null,null,null,null,false),
    janin.currency.createCurrency("q2c","qubitcoin",38,224,8,null,null,null,null,false),
    janin.currency.createCurrency("RDD","ReddCoin",61,189,5,null,null,null,null,false),
    janin.currency.createCurrency("richcoin","richcoin",61,128,9,null,76067358,76066276,null,false),
    janin.currency.createCurrency("ric","riecoin",60,128,5,null,null,null,null,false),
    janin.currency.createCurrency("rbt","rimbit",60,188,7,null,null,null,null,false),
    janin.currency.createCurrency("roi","roicoin",60,128,5,null,null,null,null,false),
    janin.currency.createCurrency("rby","rubycoin",60,188,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("rupx","rupaya",60,188,7,null,null,null,null,false),
    janin.currency.createCurrency("smb","sambacoin",62,190,7,null,null,null,null,false),
    janin.currency.createCurrency("skc","seckcoin",63,191,7,null,null,null,null,false),
    janin.currency.createCurrency("shadow","shadow",63,191,125,null,4001376362,4001378792,null,false),
    janin.currency.createCurrency("shadowtn","shadowtn",127,255,196,null,1992359419,1992361850,null,false),
    janin.currency.createCurrency("sib","sibcoin",63,128,5,null,null,null,null,false),
    janin.currency.createCurrency("611","sixeleven",52,128,5,null,null,null,null,false),
    janin.currency.createCurrency("smartcash","smartcash",63,191,18,null,76067358,76066276,null,false),
    janin.currency.createCurrency("smly","smileycoin",25,153,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("solarcoin","solarcoin",18,146,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("song","songcoin",63,191,7,null,null,null,null,false),
    janin.currency.createCurrency("spr","spreadcoin",63,191,7,null,null,null,null,false),
    janin.currency.createCurrency("xst","stealthcoin",62,190,7,null,null,null,null,false),
    janin.currency.createCurrency("strat","stratis",63,191,125,null,76067358,76067549,null,false),
    janin.currency.createCurrency("bucks","swagbucks",63,153,6,null,null,null,null,false),
    janin.currency.createCurrency("sys","syscoin",63,191,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("taj","tajcoin",65,111,6,null,null,null,null,false),
    janin.currency.createCurrency("trc","terracoin",0,128,5,null,null,null,null,false),
    janin.currency.createCurrency("testnet","testnet",111,239,196,null,70617039,70615956,null,false),
    janin.currency.createCurrency("tether","tether",0,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("tit","titcoin",0,128,5,null,null,null,null,false),
    janin.currency.createCurrency("ttc","tittiecoin",65,193,7,null,null,null,null,false),
    janin.currency.createCurrency("toacoin","toacoin",65,193,23,null,76067358,76066276,null,false),
    janin.currency.createCurrency("top","topcoin",66,194,7,null,null,null,null,false),
    janin.currency.createCurrency("tx","transfercoin",66,153,6,null,null,null,null,false),
    janin.currency.createCurrency("tzc","trezarcoin",66,194,7,null,null,null,null,false),
    janin.currency.createCurrency("ultimatesecurecash","ultimatesecurecash",68,137,125,null,4001376362,4001378792,null,false),
    janin.currency.createCurrency("uno","unobtanium",130,224,30,null,76067358,76066276,null,false),
    janin.currency.createCurrency("usde","usde",38,166,6,null,null,null,null,false),
    janin.currency.createCurrency("xvc","vcash",71,199,8,null,76067358,76066276,null,false),
    janin.currency.createCurrency("xvg","vergecoin",30,158,33,null,76067358,76066276,null,false),
    janin.currency.createCurrency("v","versioncoin",70,198,7,null,null,null,null,false),
    janin.currency.createCurrency("VTC","Vertcoin",71,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("via","viacoin",71,199,33,null,76067358,76066276,null,false),
    janin.currency.createCurrency("viacointestnet","viacointestnet",127,255,196,null,70617039,70615956,null,false),
    janin.currency.createCurrency("vik","vikingcoin",70,86,3,null,null,null,null,false),
    janin.currency.createCurrency("vivo","vivo",70,198,10,null,76067358,76066276,null,false),
    janin.currency.createCurrency("voxels","voxels",70,198,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("vpncoin","vpncoin",71,199,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("w2c","w2coin",73,201,7,null,null,null,null,false),
    janin.currency.createCurrency("wac","wacoins",73,201,7,null,null,null,null,false),
    janin.currency.createCurrency("wkc","wankcoin",0,128,5,null,null,null,null,false),
    janin.currency.createCurrency("wsx","wearesatoshicoin",135,151,6,null,null,null,null,false),
    janin.currency.createCurrency("whitecoin","whitecoin",73,201,87,null,76067358,76066276,null,false),
    janin.currency.createCurrency("wincoin","wincoin",73,201,83,null,76067358,76066276,null,false),
    janin.currency.createCurrency("wdc","worldcoin",73,201,7,null,null,null,null,false),
    janin.currency.createCurrency("xp","xp",75,203,7,null,null,null,null,false),
    janin.currency.createCurrency("ytn","yenten",78,123,5,null,null,null,null,false),
    janin.currency.createCurrency("ZEC","Zcash",7352,128,7357,null,null,null,null,false),
    janin.currency.createCurrency("zclassic","zclassic",7352,128,7357,null,76067358,76066276,null,false),
    janin.currency.createCurrency("zcoin","zcoin",82,210,7,null,76067358,76066276,null,false),
    janin.currency.createCurrency("zencash","zencash",8329,128,8342,null,76067358,76066276,null,false),
    janin.currency.createCurrency("zet","zetacoin",80,224,9,null,76067358,76066276,null,false),
    janin.currency.createCurrency("maza","maza",50,224,9,null,76067358,76066276,null,false),
    janin.currency.createCurrency("dashtn","dashtn",140,239,19,null,70617039,70615956,null,false),
    janin.currency.createCurrency("game","game",38,166,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("slimcoin","slimcoin",63,70,125,null,4016758544,4016695936,null,false),
    janin.currency.createCurrency("slimcointn","slimcointn",111,87,196,null,70617039,70615956,null,false),
    janin.currency.createCurrency("dogecointestnet","dogecointestnet",113,241,196,null,70617039,70615956,null,false),
    janin.currency.createCurrency("neblio","neblio",53,181,112,null,76067358,76066276,null,false),
    janin.currency.createCurrency("gamerscoin","gamerscoin",38,166,5,null,27108450,27106558,null,false),
    janin.currency.createCurrency("onixcoin","onixcoin",75,203,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("lkrcoin","lkrcoin",48,176,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("pivxtestnet","pivxtestnet",139,239,19,null,981492128,981489719,null,false),
    janin.currency.createCurrency("fix","fix",35,60,95,null,36513075,35729707,null,false),
    janin.currency.createCurrency("fixtestnet","fixtestnet",76,237,137,null,981492128,981489719,null,false),
    janin.currency.createCurrency("bgold","bgold",38,128,23,null,76067358,76066276,null,false),
    janin.currency.createCurrency("litecoinXprv","litecoinXprv",48,176,50,null,76067358,76066276,null,false),
    janin.currency.createCurrency("beetlecoin","beetlecoin",26,153,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bata","bata",25,164,5,null,2752284410,2752221629,null,false),
    janin.currency.createCurrency("belacoin","belacoin",25,153,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("atom","atom",23,128,10,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bitcloud","bitcloud",25,153,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("cranepay","cranepay",28,123,10,null,76067358,76066276,null,false),
    janin.currency.createCurrency("gcr","gcr",38,154,97,null,76067358,76066276,null,false),
    janin.currency.createCurrency("groestlcointestnet","groestlcointestnet",111,239,196,null,70617039,70615956,null,false),
    janin.currency.createCurrency("linx","linx",75,203,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("litecointestnet","litecointestnet",111,239,196,null,70617039,70615956,null,false),
    janin.currency.createCurrency("nix","nix",38,128,53,null,76067358,76066276,null,false),
    janin.currency.createCurrency("newyorkc","newyorkc",60,188,22,null,76067358,76066276,null,false),
    janin.currency.createCurrency("omnicore","omnicore",0,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("poswcoin","poswcoin",55,183,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("ravencoin","ravencoin",60,128,122,null,76067358,76066276,null,false),
    janin.currency.createCurrency("revolutionvr","revolutionvr",70,198,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("rsk","rsk",0,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("rsktestnet","rsktestnet",111,239,196,null,70617039,70615956,null,false),
    janin.currency.createCurrency("safecoin","safecoin",61,189,86,null,76067358,76066276,null,false),
    janin.currency.createCurrency("salus","salus",63,191,196,null,76067358,76066276,null,false),
    janin.currency.createCurrency("stash","stash",76,204,16,null,76067358,76066276,null,false),
    janin.currency.createCurrency("stashtn","stashtn",140,239,19,null,70617039,70615956,null,false),
    janin.currency.createCurrency("stratistest","stratistest",65,191,125,null,76067358,76066276,null,false),
    janin.currency.createCurrency("toa","toa",65,193,23,null,76067358,76066276,null,false),
    janin.currency.createCurrency("twins","twins",73,66,83,null,36513075,35729707,null,false),
    janin.currency.createCurrency("twinstestnet","twinstestnet",76,237,137,null,981492128,981489719,null,false),
    janin.currency.createCurrency("verge","verge",30,158,33,null,76067358,76066276,null,false),
    janin.currency.createCurrency("xuez","xuez",75,212,18,null,36513075,35729707,null,false),
    janin.currency.createCurrency("hush","hush",7352,128,7357,null,76067358,76066276,null,false),
    janin.currency.createCurrency("hush3","hush3",60,188,85,null,76067358,76066276,null,false),
    janin.currency.createCurrency("energi","energi",33,106,53,null,62441558,3621547679,null,false),
    janin.currency.createCurrency("exchangecoin","exchangecoin",8633,128,13487,null,76067358,76066276,null,false),
    janin.currency.createCurrency("artax","artax",23,151,7357,null,76067358,76066276,null,false),
    janin.currency.createCurrency("bitcoingreen","bitcoingreen",38,46,7357,null,76067358,76066276,null,false),
    janin.currency.createCurrency("anon","anon",1410,128,21385,null,76067358,76066276,null,false),
    janin.currency.createCurrency("projectcoin","projectcoin",55,117,8,null,36513075,35729707,null,false),
    janin.currency.createCurrency("phore","phore",55,212,13,null,36513075,35729707,null,false),
    janin.currency.createCurrency("blocknode","blocknode",25,75,63,null,76067358,76066276,null,false),
    janin.currency.createCurrency("blocknode_testnet","blocknode_testnet",85,137,125,null,70617039,70615956,null,false),
    janin.currency.createCurrency("litecoinz","litecoinz",2739,128,2744,null,76067358,76066275,null,false),
    janin.currency.createCurrency("blockstamp","blockstamp",0,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("cpuchain","cpuchain",28,128,30,null,76067358,76066276,null,false),
    janin.currency.createCurrency("wagerr","wagerr",73,199,63,null,36513075,35729707,null,false),
    janin.currency.createCurrency("bitcoinsv","bitcoinsv",0,128,5,null,76067358,76066276,null,false),
    janin.currency.createCurrency("monkeyproject","monkeyproject",51,55,28,null,76067358,76078564,null,false),
    janin.currency.createCurrency("rapids","rapids",61,46,6,null,76067358,76066276,null,false),
    janin.currency.createCurrency("aryacoin","aryacoin",23,151,111,null,76067358,76066276,null,false),
    janin.currency.createCurrency("thought","thought",7,123,9,null,4224098317,1525405894,null,false),
    janin.currency.createCurrency("elastos","elastos",33,239,196,null,76067358,76066276,null,false),
    janin.currency.createCurrency("sugarchain","sugarchain",63,128,125,null,76067358,76066276,null,false),
    janin.currency.createCurrency("sugarchaintestnet","sugarchaintestnet",66,239,128,null,73342198,73341116,null,false),
    janin.currency.createCurrency("regtest","regtest",111,239,196,null,70617039,70615956,null,false),
    janin.currency.createCurrency("argoneum","argoneum",50,191,97,null,76067358,76066276,null,false)
];
module.exports = janin.currencies
