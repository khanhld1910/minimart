import sqlite3 from 'sqlite3'

const initDatabase = dbFilePatch => {
	const customSqlite3 = sqlite3.verbose()

	const db = new customSqlite3.Database(
		dbFilePatch,
		sqlite3.OPEN_READWRITE,
		err => (err ? console.error(err) : console.log('Connected to database.')),
	)

	db.getItem = (query, params) => new Promise((resolve, reject) => {
		db.get(query, params, (err, row) => err ? reject(err) : resolve(row))
	})

	return db
}
export default initDatabase
