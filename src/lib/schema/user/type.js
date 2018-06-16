const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql/type');

module.exports = new GraphQLObjectType({
  name: 'UserType',
  description: 'A user which is part of a league.',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'ID of the user.',
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'email of the user.',
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'first name of the user.',
    },
    last_name: {
      type: GraphQLString,
      description: 'last name of the user.',
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the role of the users in this league.',
    },
    created_at: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the time stamp of when this user was created.',
    },
  },
});
