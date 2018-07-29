import checkUser from '../routes/checkUser'
import getAccountList from '../routes/getAccountList'
import getShopCart from '../routes/getShopCart'
import addProduct from '../routes/addProduct'
import pagination from '../routes/getPagination' // 分页器
import userDet from '../routes/userDet' // 详细信息 post
import upload from '../routes/upload' // 图片上传
// import Det from '../routes/Det'

export default (app) => {
	app.post('/api/checkUser', checkUser),
	app.get('/api/getAccountList', getAccountList)
	app.get('/api/getShopCart', getShopCart)
	app.get('/api/addProduct', addProduct)
	app.get('/api/pagination', pagination)
	app.post('/api/userDet', userDet)
	app.post('/api/upload', upload)
}