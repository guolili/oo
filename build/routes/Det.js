'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {userDet} from '../modules/userDet'

var router = _express2.default.Router();

router.post('/api/Det', function (req, res) {
	Det(function (result) {
		if (result) {
			res.send({
				mess: '数据获取成功',
				data: result
			});
		} else {
			res.send({
				mess: '数据获取失败'
			});
		}
	});
});

exports.default = router;