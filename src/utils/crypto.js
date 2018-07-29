import crypto from 'crypto'

// 安全策略token字段
//加密 utf-8国际编码  hex哈希编码   
const aesEncrypt = (data, key) => {
	const cipher = crypto.createCipher('aes192', key)
	let crypted = cipher.update(data, 'utf-8', 'hex')
	crypted += cipher.final('hex')
	return crypted
}
// 解密 update let const
const aesDecrypt = (encrypted, key) => {
	const decipher = crypto.createDecipher('aes192', key)
	let decrypted = decipher.update(encrypted, 'hex', 'utf-8')
	decrypted += decipher.final('utf-8')
	return decrypted
}

export {
	aesEncrypt,
	aesDecrypt
}