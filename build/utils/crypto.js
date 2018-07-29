'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.aesDecrypt = exports.aesEncrypt = undefined;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 安全策略token字段
//加密 utf-8国际编码  hex哈希编码   
var aesEncrypt = function aesEncrypt(data, key) {
	var cipher = _crypto2.default.createCipher('aes192', key);
	var crypted = cipher.update(data, 'utf-8', 'hex');
	crypted += cipher.final('hex');
	return crypted;
};
// 解密 update let const
var aesDecrypt = function aesDecrypt(encrypted, key) {
	var decipher = _crypto2.default.createDecipher('aes192', key);
	var decrypted = decipher.update(encrypted, 'hex', 'utf-8');
	decrypted += decipher.final('utf-8');
	return decrypted;
};

exports.aesEncrypt = aesEncrypt;
exports.aesDecrypt = aesDecrypt;