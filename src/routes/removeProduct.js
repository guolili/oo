import express from 'express'

const router = express.Router()

router.get('/api/removeProduct', (req, res) => {
	res.send({
		code: 1
	})
})

export default router