var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', function(req, res, next) {
  if(!req.body || !req.body.zip){
    res.send({status: 'error', code: 1, message: 'missing zip code'});
  }else{
    fs.readFile('./public/data.json', 'utf-8', (err, data) => {
      if(err){
        res.send({status: 'error', code: 2, message: 'error fetching data', data});
      }else{
        const totalData = JSON.parse(data);
        if(!totalData[req.body.zip]){
          res.send({status: 'error', code: 3, message: 'no data for this zip code'});
        }else{
          res.send({status: 'ok', data: totalData[req.body.zip]});
        }
      }
    });
  }
});

module.exports = router;