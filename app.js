const {app, PORT} = require('./express/express')
const { db } = require('./config/config')

console.log(db)

//
// const mongooseClientOptions = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }
//
// const mongo = new MongoClient(mongoDBConnectionUrl, mongooseClientOptions)
//
//
// mongo.connect(() => {
//     console.log("Connected correctly to server")
//
//     mongo.close()
// })
//
//
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }))

app.listen(PORT, err => {
    err ? console.error(err) : console.log(`Server started on port ${PORT}`)
})


