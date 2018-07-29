import express from 'express'
import url from 'url'
import {addCart} from '../modules/shopcart'
const router = express.Router()

router.get('/api/addProduct', (req, res) => {
	const obj = url.parse(req.url, true).query.params;
	console.log(3456)
	addCart(obj, function(code) {
		res.send({
			code: 1,
			mess: 'success'
		})
	})
})

export default router