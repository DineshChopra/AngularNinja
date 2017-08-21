var express = require('express');
var router = express.Router();

var cards = [
{amount : 2000, bonus : 0, status : 'selected/not selected'},
{amount : 1000, bonus : 0, status : 'selected/not selected'},
{amount : 500, bonus : 0, status : 'selected/not selected'},
{amount : 100, bonus : 0, status : 'selected/not selected'}
]
router.get('/', function (req, res, next) {
    res.status(200).json({
        message : 'Success',
        data : cards
    });
});

module.exports = router;
