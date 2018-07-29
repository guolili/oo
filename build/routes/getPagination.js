'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pagination = require('../modules/pagination');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// { pageIndex: '1', pageNum: '5' }
router.get('/api/pagination', function (req, res) {
	var urlObj = _url2.default.parse(req.url, true).query;
	var start = Number(urlObj.pageIndex - 1) * urlObj.pageNum;
	var end = Number(urlObj.pageNum);
	var arrData = [];
	arrData.push(start, end);
	(0, _pagination.pagination)(arrData, function (result) {
		res.send({
			code: 1,
			mess: '数据获取成功',
			data: result
		});
	});
});

exports.default = router;

/*router.get('/api/pagination', (req, res) => {
	let urlPath = url.parse(req.url, true).query;
	console.log(urlPath)
	pagination(function(result) {
		res.send({
			code:1,
			mess: '数据获取成功',
			data: result,
		})
	})
})*/