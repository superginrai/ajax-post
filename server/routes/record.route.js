const express = require('express');
const router = express.Router();
const recordCollection = require('./../modules/record-collection')

router.get('/', (req, res) => {
    res.send(recordCollection);
});

router.post('/', (req, res) => {
    console.log(req.body);//needs body parser
    recordCollection.push(req.body);
    res.sendStatus(200);
});

module.exports = router;