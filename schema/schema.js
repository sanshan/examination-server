const graphql = require('graphql')

const {GraphQLObjectType, GraphQLSchema, GraphQLString} = graphql

const menus = [
    {id: '1', title: 'First menu', description: 'Description for first menu'},
    {id: '2', title: 'Second menu', description: 'Description for second menu'},
    {id: '3', title: 'Third menu', description: 'Description for third menu'},
]

const MenuType = new GraphQLObjectType({
    name: 'Menu',
    fields: () => ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
    })
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        menu: {
            type: MenuType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                return menus.find(menu => menu.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query
})
