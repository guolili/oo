'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.aesDecrypt = exports.aesEncrypt = undefined;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aesEncrypt = function aesEncrypt(data, key) {
	var cipher = _crypto2.default.createCipher('aes192', key);
	var crypted = cipher.updata(data, 'utf8', 'hex');
	crypted += cipher.final('hex');
	return crypted;
};

var aesDecrypt = function aesDecrypt(encrypted, key) {
	var decipher = _crypto2.default.createDecipher('aes192', key);
	var decrypted = decipher.updata(encrypted, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	return decrypted;
};

exports.aesEncrypt = aesEncrypt;
exports.aesDecrypt = aesDecrypt;