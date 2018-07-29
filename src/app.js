import express from 'express'
import router from './config/router' // 接口
import bodyParser from 'body-parser'
import proof from './utils/proof'
const app = express()
//加载静态资源
// app.use(express.static(process.cwd() + '/public'))
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Credentials", "true");
	res.header('Access-Control-Allow-Methods', 'POST','GET');
	res.header('Access-Control-Allow-Headers', "Origin,X-Requested-with,Content-Type,Accept,token,sysCode"); // 请求参数 
	res.header('X-Powered-By', '3.2.1');
	res.header('Content-Type', 'application/plain;charset=utf-8');
	next();
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(proof)
router(app)
const server = app.listen(8081, function () {
	console.log('listen to 8081')
})

// 路由级  应用级
//modules 数据模块
//routes 逻辑模块