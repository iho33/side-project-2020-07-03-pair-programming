const express = require('express');
const router = express.Router();
const pianoKeyList = require('../data/data.json');


router.get('/', (req, res) => {
    res.status(200).json(pianoKeyList);
})

module.exports = router;