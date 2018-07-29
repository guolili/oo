'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeCart = exports.addCart = exports.getAllCart = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllCart = function getAllCart(callback) {
	_config2.default.query('select * from shopping', function (err, result) {
		if (!err) {
			return callback(result); // headers send  return
		} else {
			console.log('error');
		}
	});
};

var addCart = function addCart(obj, callback) {
	// 添加购物车 改变redux数据 存储 mysql数据库改变
	console.log(obj + '21432');
	/*Object.keys(obj).map((item, key) => {
 	connection.query(`update shopping set  num= ${obj[item]} where id = ${item}`, function (err, result) {
 		if (!err) {
 			callback(1)
 		}
 	})
 })*/
};

var removeCart = function removeCart(pid) {};

exports.getAllCart = getAllCart;
exports.addCart = addCart;
exports.removeCart = removeCart;