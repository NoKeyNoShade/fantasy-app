const {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql/type');

const { users } = require('../../postgres');

const type = require('./type');

const usersByLeague = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(type))),
  description: 'get all the users associated with a specific league',
  args: {
    leagueId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'the league ID to get all the users for.'
    }
  },
  resolve: (_, params) => users.getUsersByLeague(params.leagueId).then(data => data)
};

module.exports = usersByLeague;