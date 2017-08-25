var express = require('express');
var router = express.Router();
console.log('hero routes is called --------');
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
    if(hero.id){
        let index = heroes.findIndex(element => element.id == hero.id);
        heroes[index] = hero;
    }else{
        hero.id = heroes.length+1;
        heroes.push(hero);
    }
    console.log('hero for save is ', hero);
    res.status(200).json({
        message : 'Success',
        data : heroes
    });
});
router.delete('/:id', function (req, res, next) {
    let heroId = req.params.id;
    let index = heroes.findIndex(element => element.id == heroId);
    heroes.splice(index, 1);
    res.status(200).json({
        message : 'Success',
        data : heroes
    });
});
module.exports = router;
