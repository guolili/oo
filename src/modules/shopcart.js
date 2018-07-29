import connection from './config'

const getAllCart = (callback) => {
	connection.query('select * from shopping', function(err, result) {		
		if (!err) {
			return callback(result) // headers send  return
		} else {
			console.log('error')
		}
	})
}

const addCart = (obj, callback) => { // 添加购物车 改变redux数据 存储 mysql数据库改变
	console.log(obj+'21432')
	/*Object.keys(obj).map((item, key) => {
		connection.query(`update shopping set  num= ${obj[item]} where id = ${item}`, function (err, result) {
			if (!err) {
				callback(1)
			}
		})
	})*/
}

const removeCart = (pid) => {

}

export {
	getAllCart,
	addCart,
	removeCart
}