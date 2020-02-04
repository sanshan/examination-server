const graphql = require('graphql')

const Menus = require('../models/menu.model')
const MenuItems = require('../models/menu-item.model')

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql

const MenuType = new GraphQLObjectType({
    name: 'Menu',
    fields: () => ({
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        items: {
            type: new GraphQLList(MenuItemType),
            resolve(parent, args) {
                console.log('test')
                return MenuItems.find({menuId: parent._id})
            }
        }
    })
})

const MenuItemType = new GraphQLObjectType({
    name: 'MenuItemType',
    fields: () => ({
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        parent: {type: GraphQLInt},
        menuId: {type: GraphQLInt}
    })
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        menu: {
            type: MenuType,
            args: {_id: {type: GraphQLID}},
            resolve(parent, args) {
                console.log('test2')
                return Menus.findById(args._id)
            }
        },
        menus: {
            type: new GraphQLList(MenuType),
            resolve(parent, args) {
                return Menus.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query
})
