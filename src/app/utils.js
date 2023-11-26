const CryptoJS = require('crypto-js')

const createSignature = (nonce, userid, key, secret) => {
  return CryptoJS.HmacSHA256(nonce + userid + key, secret).toString()
}

module.exports = { createSignature }
