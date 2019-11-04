'use strict';

let core = {};
let supported = {};

core.networks = require('./lib/networks');
core.coins = require('./lib/coins');

for (let i in core.networks) {
	let network = core.networks[i];
	supported[network.coin] = network;
}

core.get = function(input) {
	let coin = input.toLowerCase();

	if (coin in supported) {
		return supported[coin];
	}

	return null;
};

module.exports = core;