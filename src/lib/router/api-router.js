// @flow
const express = require('express');
const graphQLHTTP = require('express-graphql');

const router = express.Router();

router.use('/', graphQLHTTP(req => ({
  context: {
    session: req.session,
  },
  schema: {},
  formatError: err => err,
})));

// Catch error
router.use((err: string, req, res) => {
  res.status(400).json({
    message: err,
  });
});

module.exports = router;
