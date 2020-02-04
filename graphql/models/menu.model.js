const mongoose = require('../../dbs')

const Schema = mongoose.Schema

const menuSchema = new Schema(
    {
        _id: mongoose.ObjectId,
        title: String,
        description: String
    },
    {
        collection: 'menus'
    }
)

module.exports = mongoose.model('Menu', menuSchema)
