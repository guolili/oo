import connection from './config'

const userDet = (userInfo, callback) => { // 用户的详细数据
	connection.query('select * from userinfo where username = ?', userInfo.username, (err, result) => {
		if (!err) {
			callback(result)
		} else {
			throw new Error('error')
		}
	})
}

export {
	userDet
}