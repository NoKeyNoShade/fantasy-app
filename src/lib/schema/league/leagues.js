const {
  GraphQLList,
  GraphQLNonNull,
} = require('graphql/type');

const { getLeagues } = require('../../postgres');

const type = require('./type');

const leagues = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(type))),
  description: 'get all the currently active leagues',
  resolve: () => getLeagues().then(data => data),
};

module.exports = leagues;
