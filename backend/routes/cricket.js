var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
    let score = req.body;
    console.log('score recieved --- ',score);
    res.status(200).json({
        message : 'Success',
    });
});

module.exports = router;
