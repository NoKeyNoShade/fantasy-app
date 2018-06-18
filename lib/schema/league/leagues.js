const {
  GraphQLList,
  GraphQLNonNull
} = require('graphql/type');

const { leagues } = require('../../postgres');

const type = require('./type');

const getLeagues = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(type))),
  description: 'get all the currently active leagues',
  resolve: () => leagues.getLeagues().then(data => data)
};

module.exports = getLeagues;