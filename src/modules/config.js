// 连接数据库模块
import mysql from 'mysql'
const connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '123456789',
	database: 'data'
})
connection.connect()
export default connection