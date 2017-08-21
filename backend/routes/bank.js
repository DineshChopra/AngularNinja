var express = require('express');
var router = express.Router();

var banks = [
    {name : 'State Bank of India', id : 1},
    {name : 'Axis Bank', id : 2},
    {name : 'ICICI Bank', id : 3}
]
router.get('/', function (req, res, next) {
    res.status(200).json({
        message : 'Success',
        data : banks
    });
});

router.post('/', function (req, res, next) {
    let bank = req.body;
    banks.push(bank);
    res.status(200).json({
        message : 'Success',
        data : banks
    });
});
router.delete('/', function (req, res, next) {
    let bankId = req.params.id;
    let index = banks.findIndex(bank => bank.id == bankId);
    banks.splice(index, 1);
    res.status(200).json({
        message : 'Success',
        data : banks
    });
});

rouptr.put('/', function(req, res, next){
    let bank = req.body;
    let index = banks.findIndex(bank => bank.id == bankId);
    let existingBank = banks.find(element => {element.id == bank.id});
    existingBank.name = bank.name;
    res.status(200).json({
        message : 'Success',
        data : banks
    });    
});
rouptr.patch('/', function(req, res, next){
    let bank = req.body;
    let index = banks.findIndex(bank => bank.id == bankId);
    let existingBank = banks.find(element => {element.id == bank.id});
    existingBank.name = bank.name;
    res.status(200).json({
        message : 'Success',
        data : banks
    });    
});
module.exports = router;
