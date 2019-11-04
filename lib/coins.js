'use strict';

const typeforce = require('typeforce');

const coins = {
	BCH: 'bch',
	BSV: 'bsv',
	BTC: 'btc',
	BTG: 'btg',
	LTC: 'ltc',
	ZEC: 'zec',
	DASH: 'dash',
	DOGE: 'doge',
	XRP: 'xrp',
	ETH: 'eth',

	tBCH: 'tbch',
	tBSV: 'tbsv',
	tBTC: 'tbtc',
	tLTC: 'tltc',
	tZEC: 'tzec',
	tDASH: 'tdash',
	tXRP: 'txrp',
	tETH: 'teth'
};

coins.isBitcoin = function (network) {
	return typeforce.value(coins.BTC)(network.coin);
};

coins.isBitcoinTestnet = function (network) {
	return typeforce.value(coins.tBTC)(network.coin);
};

coins.isBitcoinCash = function (network) {
	return typeforce.value(coins.BCH)(network.coin);
};

coins.isBitcoinCashTestnet = function (network) {
	return typeforce.value(coins.tBCH)(network.coin);
};

coins.isBitcoinSV = function (network) {
	return typeforce.value(coins.BSV)(network.coin);
};

coins.isBitcoinSVTestnet = function (network) {
	return typeforce.value(coins.tBSV)(network.coin);
};

coins.isBitcoinGold = function (network) {
	return typeforce.value(coins.BTG)(network.coin);
};

coins.isDash = function (network) {
	return typeforce.value(coins.DASH)(network.coin);
};

coins.isDashTestnet = function (network) {
	return typeforce.value(coins.tDASH)(network.coin);
};

coins.isLitecoin = function (network) {
	return typeforce.value(coins.LTC)(network.coin);
};

coins.isLitecoinTestnet = function (network) {
	return typeforce.value(coins.tLTC)(network.coin);
};

coins.isZcash = function (network) {
	return typeforce.value(coins.ZEC)(network.coin);
};

coins.isZcashTestnet = function (network) {
	return typeforce.value(coins.tZEC)(network.coin);
};

coins.isDogecoin = function (network) {
	return typeforce.value(coins.DOGE)(network.coin);
};

coins.isRipple = function (network) {
	return typeforce.value(coins.XRP)(network.coin);
};

coins.isRippleTestnet = function (network) {
	return typeforce.value(coins.tXRP)(network.coin);
};

coins.isEther = function (network) {
	return typeforce.value(coins.ETH)(network.coin);
};

coins.isEtherTestnet = function (network) {
	return typeforce.value(coins.tETH)(network.coin);
};

coins.isValidCoin = typeforce.oneOf(
	coins.isBitcoin,
	coins.isBitcoinTestnet,
	coins.isBitcoinCash,
	coins.isBitcoinCashTestnet,
	coins.isBitcoinSV,
	coins.isBitcoinSVTestnet,
	coins.isBitcoinGold,
	coins.isLitecoin,
	coins.isLitecoinTestnet,
	coins.isZcash,
	coins.isZcashTestnet,
	coins.isDogecoin,
	coins.isRipple,
	coins.isRippleTestnet,
	coins.isEther,
	coins.isEtherTestnet
);

module.exports = coins;
