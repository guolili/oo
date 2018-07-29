import url from 'url'
import express from 'express'
import {pagination} from '../modules/pagination'

const router = express.Router()
// { pageIndex: '1', pageNum: '5' }
router.get('/api/pagination', (req, res) => {
	let urlObj = url.parse(req.url, true).query;
	let start = Number(urlObj.pageIndex - 1) * urlObj.pageNum;
	let end = Number(urlObj.pageNum);
	let arrData = [];
	arrData.push(start, end);
	pagination(arrData, function(result) {
		res.send({
			code:1,
			mess: '数据获取成功',
			data: result,
		})
	})
})


export default router;















/*router.get('/api/pagination', (req, res) => {
	let urlPath = url.parse(req.url, true).query;
	console.log(urlPath)
	pagination(function(result) {
		res.send({
			code:1,
			mess: '数据获取成功',
			data: result,
		})
	})
})*/