const express = require('express');
const graphQLHTTP = require('express-graphql');
const schema = require('../schema');

const router = express.Router();

router.use('/graphql', graphQLHTTP(req => ({
  context: {
    session: req.session
  },
  schema,
  formatError: err => {
    console.log(err);
    return err;
  }
})));

module.exports = router;