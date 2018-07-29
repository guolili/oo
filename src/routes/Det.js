import express from 'express'
// import {userDet} from '../modules/userDet'

const router = express.Router()

router.post('/api/Det', function(req, res) {
	Det(function(result) {
		if (result) {
			res.send({
				mess: '数据获取成功',
				data: result
			})
		} else {
			res.send({
				mess: '数据获取失败'
			})
		}
	})
})

export default router

