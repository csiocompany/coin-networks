'use strict';

let coins = require('./coins');

module.exports = {
	ether: {
		messagePrefix: '\x20Ether Signed Message:\n',
		bech32: 'bc',
		bip44: 60,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x00,
		scriptHash: 0x05,
		wif: 0x80,
		coin: coins.ETH
	},
	etherTestnet: {
		messagePrefix: '\x20Ether Signed Message:\n',
		bech32: 'bc',
		bip44: 1,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x00,
		scriptHash: 0x05,
		wif: 0x80,
		coin: coins.tETH
	},
	ripple: {
		messagePrefix: '\x20Ripple Signed Message:\n',
		bech32: 'bc',
		bip44: 144,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x00,
		scriptHash: 0x05,
		wif: 0x80,
		coin: coins.XRP
	},
	rippleTestnet: {
		messagePrefix: '\x20Ripple Signed Message:\n',
		bech32: 'bc',
		bip44: 1,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x00,
		scriptHash: 0x05,
		wif: 0x80,
		coin: coins.tXRP
	},
	dogecoin: {
		messagePrefix: '\x18Dogecoin Signed Message:\n',
		bip44: 3,
		bip32: {
			public: 0x02facafd,
			private: 0x02fac398
		},
		pubKeyHash: 0x1e,
		scriptHash: 0x16,
		wif: 0x9e,
		coin: coins.DOGE
	},
	dash: {
		messagePrefix: '\x19DarkCoin Signed Message:\n',
		bip44: 5,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x4c, // https://dash-docs.github.io/en/developer-reference#opcodes
		scriptHash: 0x10,
		wif: 0xcc,
		coin: coins.DASH
	},
	dashTestnet: {
		messagePrefix: '\x19DarkCoin Signed Message:\n',
		bip44: 1,
		bip32: {
			public: 0x043587cf,
			private: 0x04358394
		},
		pubKeyHash: 0x8c, // https://dash-docs.github.io/en/developer-reference#opcodes
		scriptHash: 0x13,
		wif: 0xef, // https://github.com/dashpay/godashutil/blob/master/wif.go#L72
		coin: coins.tDASH
	},
	bitcoincash: {
		messagePrefix: '\x18Bitcoin Signed Message:\n',
		bech32: 'bc',
		bip44: 145,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x00,
		scriptHash: 0x05,
		wif: 0x80,
		coin: coins.BCH,
		forkId: 0x00
	},
	bitcoincashTestnet: {
		messagePrefix: '\x18Bitcoin Signed Message:\n',
		bech32: 'tb',
		bip44: 1,
		bip32: {
			public: 0x043587cf,
			private: 0x04358394
		},
		pubKeyHash: 0x6f,
		scriptHash: 0xc4,
		wif: 0xef,
		coin: coins.tBCH
	},
	bitcoinsv: {
		messagePrefix: '\x18Bitcoin Signed Message:\n',
		bech32: 'bc',
		bip44: 236,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x00,
		scriptHash: 0x05,
		wif: 0x80,
		coin: coins.BSV,
		forkId: 0x00
	},
	bitcoinsvTestnet: {
		messagePrefix: '\x18Bitcoin Signed Message:\n',
		bech32: 'tb',
		bip44: 1,
		bip32: {
			public: 0x043587cf,
			private: 0x04358394
		},
		pubKeyHash: 0x6f,
		scriptHash: 0xc4,
		wif: 0xef,
		coin: coins.tBSV
	},
	zcash: {
		messagePrefix: '\x18ZCash Signed Message:\n',
		bech32: 'bc',
		bip44: 133,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x1cb8,
		scriptHash: 0x1cbd,
		wif: 0x80,
		// This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
		// dummy value.
		consensusBranchId: {
			1: 0x00,
			2: 0x00,
			3: 0x5ba81b19,
			4: 0x76b809bb
		},
		coin: coins.ZEC
	},
	zcashTestnet: {
		messagePrefix: '\x18ZCash Signed Message:\n',
		bech32: 'tb',
		bip44: 133,
		bip32: {
			public: 0x043587cf,
			private: 0x04358394
		},
		pubKeyHash: 0x1d25,
		scriptHash: 0x1cba,
		wif: 0xef,
		consensusBranchId: {
			1: 0x00,
			2: 0x00,
			3: 0x5ba81b19,
			// 4: 0x76b809bb (old Sapling branch id)
			4: 0x2bb40e60
		},
		coin: coins.tZEC
	},
	bitcoingold: {
		messagePrefix: '\x18Bitcoin Gold Signed Message:\n',
		bech32: 'btg',
		bip44: 156,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x26,
		scriptHash: 0x17,
		wif: 0x80,
		coin: coins.BTG,
		forkId: 0x4F /* 79 */
	},
	litecoin: {
		messagePrefix: '\x19Litecoin Signed Message:\n',
		bech32: 'ltc',
		bip44: 2,
		bip32: {
			public: 0x019da462,
			private: 0x019d9cfe
		},
		pubKeyHash: 0x30,
		scriptHash: 0x32,
		wif: 0xb0,
		coin: coins.LTC
	},
	litecoinTestnet: {
		messagePrefix: '\x19Litecoin Signed Message:\n',
		bech32: 'tltc',
		bip44: 1,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x6f,
		scriptHash: 0x3a,
		wif: 0xb0,
		coin: coins.tLTC
	},
	bitcoin: {
		messagePrefix: '\x18Bitcoin Signed Message:\n',
		bech32: 'bc',
		bip44: 0,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x00,
		scriptHash: 0x05,
		wif: 0x80,
		coin: coins.BTC
	},
	bitcoinTestnet: {
		messagePrefix: '\x18Bitcoin Signed Message:\n',
		bech32: 'tb',
		bip44: 1,
		bip32: {
			public: 0x043587cf,
			private: 0x04358394
		},
		pubKeyHash: 0x6f,
		scriptHash: 0xc4,
		wif: 0xef,
		coin: coins.tBTC
	}
};
