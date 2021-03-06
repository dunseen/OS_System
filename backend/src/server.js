const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(3333);