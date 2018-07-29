import express from 'express'
import {getAllCart} from '../modules/shopcart'

const router = express.Router()
// every saga 
router.get('/api/getShopCart', (req, res) => { // 反向代理 服务端操作s
	getAllCart(function(result) {
		res.send({
			code: 1,
			msg: '获取成功',
			data: result
		})
	})
})

export default router