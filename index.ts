require('dotenv').config();
import express from 'express';
const app = express();

app.use( express.json());

const apiRoutes = require('./src/routes/api')
app.use('/', apiRoutes)

module.exports = app;