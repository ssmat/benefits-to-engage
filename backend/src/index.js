require('dotenv/config');
const routes = require('./router');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);