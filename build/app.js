'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('./config/router');

var _router2 = _interopRequireDefault(_router);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _proof = require('./utils/proof');

var _proof2 = _interopRequireDefault(_proof);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 接口
var app = (0, _express2.default)();
//加载静态资源
// app.use(express.static(process.cwd() + '/public'))
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Credentials", "true");
	res.header('Access-Control-Allow-Methods', 'POST', 'GET');
	res.header('Access-Control-Allow-Headers', "Origin,X-Requested-with,Content-Type,Accept,token,sysCode"); // 请求参数 
	res.header('X-Powered-By', '3.2.1');
	res.header('Content-Type', 'application/plain;charset=utf-8');
	next();
});
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use(_proof2.default);
(0, _router2.default)(app);
var server = app.listen(8081, function () {
	console.log('listen to 8081');
});

// 路由级  应用级
//modules 数据模块
//routes 逻辑模块