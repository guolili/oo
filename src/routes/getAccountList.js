import express from 'express'
import {getAccountList} from '../modules/users'
import {aesDecrypt} from '../utils/crypto' // 解密
const router = express.Router()
// token 有或者没有
// token 有效期 超时
router.get('/api/getAccountList', function(req, res) {
	const {token} = req.headers 
	// aesDecrypt(token, '5.9') // 解密
	getAccountList(function(result) {
		try {
			result &&
			res.send({
				code: 1,
				msg: '登录成功5.9',
				data: result,
				token: aesDecrypt(token, '5.9')
			})
			||
			res.send({
				code: 0,
				msg: '获取失败',
			})
		} catch (e) {
			res.send({
				code: 0,
				msg: '服务器异常'
			})
		}
	})
})
export default router