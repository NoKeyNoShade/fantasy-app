const {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql/type');

const { leagues } = require('../../postgres');
const type = require('./type');

const getLeaguesByUser = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(type))),
  description: 'get all the leagues which the user is part of.',
  args: {
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'the userID for to get the leagues of.'
    }
  },
  resolve: (_, params) => leagues.getLeaguesByUser(params.userId).then(data => data)
};

module.exports = getLeaguesByUser;