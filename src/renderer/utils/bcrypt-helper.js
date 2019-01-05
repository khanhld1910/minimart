import bcrypt from 'bcrypt'
import constants from './constants'
const SALT_ROUNDS = constants.PASSWORD_SALT_ROUNDS

const stringEncrypt = string => bcrypt.hash(string, SALT_ROUNDS)
const validString = (string, hash) => bcrypt.compare(string, hash)

export default {
	stringEncrypt,
	validString,
}