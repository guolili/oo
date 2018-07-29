import connection from './config'

const pagination = (arrData, callback) => {
	// console.log(arrData)
	connection.query(`select * from getpagination limit ${arrData[0]}, ${arrData[1]}`, (err, result) => {
		if (!err) {
			callback(result)
		} else {
			throw new Error(err)
		}
	})
}

export {
	pagination
}
/*const pagination = (callback) => {
	connection.query('select * from getpagination', (err, result) => {
		if (!err) {
			callback(result)
		} else {
			throw new Error('pagination报错')
		}
	})
}*/
