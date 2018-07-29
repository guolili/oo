'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _shopcart = require('../modules/shopcart');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/api/addProduct', function (req, res) {
	var obj = _url2.default.parse(req.url, true).query.params;
	console.log(3456);
	(0, _shopcart.addCart)(obj, function (code) {
		res.send({
			code: 1,
			mess: 'success'
		});
	});
});

exports.default = router;