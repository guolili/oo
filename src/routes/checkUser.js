import express from 'express'
import {checkUser} from '../modules/users'
import {aesEncrypt, aesDecrypt} from '../utils/crypto'
const router = express.Router()
let sTime
let eTime
// c77b10d32737e7ff4641dda15fef30f8 token字段 zhangsan
router.post('/api/checkUser', function(req, res) {
	const {token} = req.headers
	function fn () {
		checkUser(req.body, function(result) {
			if(result) {
				res.send({
					code: 1,
					msg: '登录成功',
					username: req.body.username,
					token: aesEncrypt(req.body.username, '5.9')
				})
			} else { // 0提醒
				res.send({
					code: 0,
					msg: '登录失败',
					username: req.body.username
				})
			}
		})
	}
	if (!token) { // 首次查找数据库
		sTime = new Date().getTime() / 1000
		fn()
	} else { // user对比
		eTime = new Date().getTime() / 1000
		let user = aesDecrypt(token, '5.9')
		if (req.body.username === user) {
			res.send({
					code: 1,
					msg: '登录成功=>token',
					username: req.body.username,
					token: aesEncrypt(req.body.username, '5.9')
				})
		} else {
			fn()
		}
	}	
})
export default router
 // 应用级
/*export default (req, res, next) => {
	res.send('checkOut')
}*/