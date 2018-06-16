const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql/type');

const query = require('./query');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: query,
  }),
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: {},
  // }),
});

module.exports = schema;
