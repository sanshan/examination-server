const mongoose = require('mongoose')
const config = require('config')

const DEV_URI = config.get('database.providers.mongodb.url')

mongoose.connection.on('connected', () => {
    console.log('Соединение установлено')
})

mongoose.connect(DEV_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).catch(err => console.error('Ошибка при подключении к базе данных', err))

module.exports = mongoose
