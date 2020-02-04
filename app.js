const app = require('./express/express')
const config = require('config')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema/schema')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = config.get('express.port')

app.listen(PORT, err => {
    err ? console.error(err) : console.log(`Server started on port ${PORT}`)
})



