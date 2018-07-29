'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pagination = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pagination = function pagination(arrData, callback) {
	// console.log(arrData)
	_config2.default.query('select * from getpagination limit ' + arrData[0] + ', ' + arrData[1], function (err, result) {
		if (!err) {
			callback(result);
		} else {
			throw new Error(err);
		}
	});
};

exports.pagination = pagination;
/*const pagination = (callback) => {
	connection.query('select * from getpagination', (err, result) => {
		if (!err) {
			callback(result)
		} else {
			throw new Error('pagination报错')
		}
	})
}*/