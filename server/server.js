const express = require('express');
const bodyParser = require('body-parser');

const recordRouter = require('./routes/record.route');

const app = express();
const PORT = 5000;

//this will live in the database shortly
const recordCollection = require('./modules/record-collection')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));//need to post!

// routes (get, post, put delete requests)
app.use('/record', recordRouter);

app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}`);
});

