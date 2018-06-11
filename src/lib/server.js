// @flow
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('router'); // eslint-disable-line
const port: string = process.env.PORT || '3000';
const env = process.env.NODE_ENV || 'development';

const app = express();

// App settings
app.set('case sensitive routing', true);
app.set('trust proxy', 1);

if (env === 'development') {
  app.enable('verbose errors');
  app.locals.pretty = true;
  // Graphiql hits api/graphql, so the request must come from the logged in user.
  app.use('/graphiql', (req, res) => {
    res.sendFile(path.resolve('./graphiql/index.html'));
  });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', router.apiRouter);
app.use('/', router.appRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}`); // eslint-disable-line
});
