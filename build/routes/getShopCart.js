'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _shopcart = require('../modules/shopcart');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// every saga 
router.get('/api/getShopCart', function (req, res) {
	// 反向代理 服务端操作s
	(0, _shopcart.getAllCart)(function (result) {
		res.send({
			code: 1,
			msg: '获取成功',
			data: result
		});
	});
});

exports.default = router;