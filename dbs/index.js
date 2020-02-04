const mongoose = require('mongoose')
const config = require('config')
const logger = require('../logger/logger')

const DEV_URI = config.get('database.providers.mongodb.url')

mongoose.connection.on('connected', () => {
    logger.info('Соединение с БД установлено')
})

mongoose.connect(DEV_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).catch(err => logger.error('Ошибка при подключении к базе данных', {additional: err}))

module.exports = mongoose
