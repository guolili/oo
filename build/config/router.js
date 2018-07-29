'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _checkUser = require('../routes/checkUser');

var _checkUser2 = _interopRequireDefault(_checkUser);

var _getAccountList = require('../routes/getAccountList');

var _getAccountList2 = _interopRequireDefault(_getAccountList);

var _getShopCart = require('../routes/getShopCart');

var _getShopCart2 = _interopRequireDefault(_getShopCart);

var _addProduct = require('../routes/addProduct');

var _addProduct2 = _interopRequireDefault(_addProduct);

var _getPagination = require('../routes/getPagination');

var _getPagination2 = _interopRequireDefault(_getPagination);

var _userDet = require('../routes/userDet');

var _userDet2 = _interopRequireDefault(_userDet);

var _upload = require('../routes/upload');

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 图片上传
// import Det from '../routes/Det'

// 分页器
exports.default = function (app) {
	app.post('/api/checkUser', _checkUser2.default), app.get('/api/getAccountList', _getAccountList2.default);
	app.get('/api/getShopCart', _getShopCart2.default);
	app.get('/api/addProduct', _addProduct2.default);
	app.get('/api/pagination', _getPagination2.default);
	app.post('/api/userDet', _userDet2.default);
	app.post('/api/upload', _upload2.default);
}; // 详细信息 post