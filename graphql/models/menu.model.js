const mongoose = require('../../dbs')

const Schema = mongoose.Schema

const menuSchema = new Schema(
    {
        title: String,
        description: String
    },
    {
        collection: 'menus'
    }
)

module.exports = mongoose.model('Menu', menuSchema)
