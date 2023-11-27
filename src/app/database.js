const { Database } = require('@brtmvdl/database')

module.exports.db = new Database(process.env.DATA_PATH)
