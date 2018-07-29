'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _formidable = require('formidable');

var _formidable2 = _interopRequireDefault(_formidable);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { queryRoleList } from '../modules/Role';
var router = _express2.default.Router();

router.post('/api/upload', function (req, res, next) {
    console.log(req.headers);
    var form = new _formidable2.default.IncomingForm(); //创建上传表单
    form.encoding = 'binary'; //设置编辑
    form.uploadDir = '/images/uploaded'; //设置上传目录
    // form.uploadDir = '/root/webProject/upload/public/uploaded/';
    form.keepExtensions = true; //保留后缀
    form.parse(req, function (err, fileds, files) {
        console.log(454);
        var inputFile = files.imgFile;
        console.log(inputFile);
        var uploadedPath = inputFile.path;
        var dstPath = process.cwd() + '/images/' + inputFile.name;
        _fs2.default.rename(uploadedPath, dstPath, function (err) {
            if (err) {
                throw new Error('上传错误');
            } else {
                res.json({
                    code: 1,
                    msg: '上传成功',
                    img: 'http://169.254.168.238:8080/api/upload/' + inputFile.name
                });
            };
        });
    });
});
exports.default = router;