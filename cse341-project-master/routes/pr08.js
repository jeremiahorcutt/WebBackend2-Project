const express = require('express');
const router = express.Router();

var jsonEng = require('../../controllers/week8.js');

router.get('/', jsonEng.processJson).post('/', jsonEng.getIndex);
module.exports = router;