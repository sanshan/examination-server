const logger = require('./logger/logger')
const app = require('./express/express')
const config = require('config')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema/schema')
const cors = require('cors')

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = config.get('express.port')

app.listen(PORT, err => {
    err ? logger.error(`Ошибка запуска сервера на порту ${PORT}`, {additional: err}) : logger.info(`Сервер запущен на порту ${PORT}`)
})



