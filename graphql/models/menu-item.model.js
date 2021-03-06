const mongoose = require('../../dbs')

const Schema = mongoose.Schema

const menuItemSchema = new Schema({
    _id: String,
    title: String,
    description: String,
    parent: String,
    menuId: String
})

module.exports = mongoose.model('MenuItem', menuItemSchema, 'menu-items')
