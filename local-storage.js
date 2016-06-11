
"use strict";

angular.module('pads.localStorage', []).service('$padsLocalStorage', function() {
	"use strict";

	var service = {},
		zone = 'anonymous';

	/**
	 * @param {string} [value]
	 */
	service.setZone = function(value) {
		zone = value || 'anonymous';
	};

	/**
	 * @param {string} namespace
	 * @param {string} key
	 * @returns {string}
	 */
	service.buildKey = function(namespace, key) {
		return [namespace, zone, key].join('.');
	};

	/**
	 * @param {string} namespace
	 * @param {string} key
	 * @param {string|boolean|number} item
	 */
	service.setItem = function(namespace, key, item) {
		localStorage.setItem(service.buildKey(namespace, key), item);
	};

	/**
	 * @param {string} namespace
	 * @param {string} key
	 * @param {string|boolean|number|null} fallback
	 * @returns {string|boolean|number|null}
	 */
	service.getItem = function(namespace, key, fallback) {
		if (fallback === undefined) {
			fallback = null ;
		}
		try {
			var item = localStorage.getItem(service.buildKey(namespace, key));
			if (item === null ) {
				return fallback;
			}
			if (item === 'true') {
				return true;
			}
			if (item === 'false') {
				return false;
			}
			return isNaN(item) ? item : parseFloat(item);
		}
		catch (exception) {
			return fallback;
		}
	};

	/**
	 * @param {string} namespace
	 * @param {string} key
	 */
	service.removeItem = function(namespace, key) {
		localStorage.removeItem(service.buildKey(namespace, key));
	};

	return service;
});