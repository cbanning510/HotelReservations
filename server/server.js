import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';
import mongoose from 'mongoose';
import Reservation from './model';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const MONGO_URI = 'mongodb://test:test@ds263948.mlab.com:63948/graphql';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { Reservation } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

export default app;
