import express from 'express'
import {userDet} from '../modules/userDet'

const router = express.Router()

router.post('/api/userDet', function(req, res) {
	userDet(req.body, function(result) {
		if (result) {
			res.send({
				mess: '用户信息获取成功',
				data: result
			})
		} else {
			res.send({
				mess: '用户信息获取失败',
				username: req.body.username
			})
		}
	})
})

export default router

