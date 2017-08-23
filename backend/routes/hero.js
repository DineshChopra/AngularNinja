var express = require('express');
var router = express.Router();

var heroes = [
{id : 1, name : 'Ram', age : 10, hobby: 'Cricket'},
{id : 2, name : 'Sham', age : 20, hobby: 'Football'},
{id : 3, name : 'Gita', age : 10, hobby: 'Hockey'},
{id : 4, name : 'Sita', age : 30, hobby: 'Cricket'},
]
router.get('/', function (req, res, next) {
    res.status(200).json({
        message : 'Success',
        data : heroes
    });
});

router.post('/', function (req, res, next) {
    let hero = req.body;
    heroes.push(hero);
    res.status(200).json({
        message : 'Success',
        data : heroes
    });
});
module.exports = router;
