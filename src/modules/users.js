import connection from './config'
// 登录
const checkUser = (userInfo, callback) => { // callback通信
	connection.query('select * from userinfo where username = ?', userInfo.username, (err, result) => {
		const code = result && result.some((item) => {
			return item.password === userInfo.password
		})
		if (code) { // 注册
			callback(1)
		} else { // home
			callback(0)
		}
	})
}

const getAccountList = (callback) => {
	connection.query('select * from userinfo', (err, result) => {
		if (!err) {
			callback(result)
		} else {
			callback({
				code: 0,
				msg: 'fail'
			})
		}
	})
}

export {
	checkUser,
	getAccountList
}