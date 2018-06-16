const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} = require('graphql/type');

module.exports = new GraphQLObjectType({
  name: 'LeagueType',
  description: 'a league is a singular contest for a specific season of DragRace.',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'the ID of league.'
    },
    label: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the label of the league'
    },
    active: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'whether or not the league is currently active'
    },
    week: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'the week the league is currently on.'
    },
    season_id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the season ID of DragRace the league is associated with'
    },
    created_at: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the timestamp of the creation date of the league'
    }
  }
});