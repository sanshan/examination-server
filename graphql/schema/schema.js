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
    name: 'MenuType',
    description: 'Тип данных для меню приложения',
    fields: () => ({
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        items: {
            type: new GraphQLList(MenuItemType),
            resolve(parent, args) {
                return MenuItems.find({menuId: parent._id})
            }
        }
    })
})

const MenuItemType = new GraphQLObjectType({
    name: 'MenuItemType',
    description: 'Тип данных для пунктов меню приложения',
    fields: () => ({
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        parent: {type: GraphQLInt},
        menuId: {type: GraphQLInt}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Корневой запрос',
    fields: {
        getMenuById: {
            description: 'Получить одно меню по ID',
            type: MenuType,
            args: {_id: {type: GraphQLID}},
            resolve(parent, args) {
                return Menus.findById(args._id)
            }
        },
        getAllMenus: {
            description: 'Получить все меню',
            type: new GraphQLList(MenuType),
            resolve(parent, args) {
                return Menus.find({})
            }
        },
        getAllMenuItems: {
            description: 'Получить все пункты меню',
            type: new GraphQLList(MenuItemType),
            resolve(parent, args) {
                return MenuItems.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
