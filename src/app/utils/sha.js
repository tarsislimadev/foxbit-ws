import CryptoJS from 'crypto-js'

export const createSignature = (nonce, userid, key, secret) => {
  return CryptoJS.HmacSHA256(nonce + userid + key, secret).toString()
}
