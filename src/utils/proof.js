const e = 7200
let sTime; // 计算token 初始时间
let eTime;
import {aesEncrypt, aesDecrypt} from '../utils/crypto'

export default (req, res,next) => {
	const {token} = req.headers
	if (!token && req.url !== '/api/checkUser') {
		res.send({
			code: 0,
			msg: '无权限访问!token'
		})
	} else if (!token && req.url === '/api/checkUser') {
		sTime = new Date().getTime() / 1000
		next() // 首次请求登录接口
	} else if (token && req.url !== '/api/checkUser') {
		eTime = new Date().getTime() / 1000
		const user = aesDecrypt(token, '5.9')
		if (!user) {
			res.send({
				code: 0,
				msg: '无权限访问token'
			})
		} else if ((eTime - sTime) > e) {
			res.send({
				code: 0,
				msg: '登录超时token'
			})
		} else {
			next()
		}
	} else if (token && req.url === '/api/checkUser') { // 二次请求登陆
		const user = aesDecrypt(token, '5.9')
		if (!user || (eTime - sTime) > e) {
			sTime = new Date().getTime() / 1000
			next(); // 重新验证接口
		} else {
			res.send({
				code: 1,
				msg: '登陆成功=》=token',
				token: req.headers['token']
			})
		}
	}
}