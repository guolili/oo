import express from 'express';
// import { queryRoleList } from '../modules/Role';
import formidable from 'formidable';
import fs from 'fs';
const router = express.Router();

router.post('/api/upload', function(req, res, next) {
    console.log(req.headers)
    const form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'binary';        //设置编辑
    form.uploadDir = '/images/uploaded';     //设置上传目录
    // form.uploadDir = '/root/webProject/upload/public/uploaded/';
    form.keepExtensions = true;     //保留后缀
    form.parse(req, (err, fileds, files) => {
        console.log(454)
        let inputFile = files.imgFile;
        console.log(inputFile)
        let uploadedPath = inputFile.path;
        let dstPath = process.cwd() + '/images/' + inputFile.name;
        fs.rename(uploadedPath, dstPath, (err) => {
            if (err) {
                throw new Error('上传错误')
            } else {
                res.json({
                    code: 1,
                    msg: '上传成功',
                    img: 'http://169.254.168.238:8080/api/upload/' + inputFile.name
                })
            };
        })
    })
});
export default router