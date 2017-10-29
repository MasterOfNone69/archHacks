var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  /*let connection = mysql.createConnection({
    host     : 'aa1wtzu5p8vkrfb.cjfnwtnzkfsq.us-west-2.rds.amazonaws.com',
    user     : 'sqluser',
    password : 'mwNE9steADc6xQBr',
    database : 'ArchHacks'
  });*/
  let totalData;
  fs.readFile('./public/data.json', 'utf-8', (err, data) => {
    if(err){
      connection.end();
      throw err;
    }
    totalData = JSON.parse(data);
    /**DATA PARSING GOES HERE*/

    fs.readFile('./public/datasets/combinedfiles.csv', 'utf-8', (err, data) => {
      if(err) throw err;
      let lines = data.split('\r').map(line => line.split(','));
      let headers = [...lines[0]];
      headers.splice(0,2);
      headers.splice(1,3);

      lines.splice(0,1);
      lines = lines.map(line => {
        line.splice(0,2);
        line.splice(1,3);
        let out = {};
        line.forEach((item, i) => {
          out[headers[i]]= item;
        });
        return out;
      });

      lines.forEach(line => {
        if(totalData[line.zip]){
          totalData[line.zip] = Object.assign({}, totalData[line.zip], line);
        }
      });
      exportData(totalData, res, true);
    });

    /**END PARSING*/
    //exportData(totalData, res, false);
  });
  /*
  connection.connect(err => {
    if (err) throw err;
  });
  */
});

const exportData = (data, res, active) => {
  if(active){
    fs.writeFile("./public/data.json", JSON.stringify(data,null,2), 'utf8', err => {
      if(err) throw err;
      res.send('<pre>' + JSON.stringify(data,null,2) + '</pre>');
    });
  }else{
    res.send('<pre>' + JSON.stringify(data,null,2) + '</pre>');
  }
};

module.exports = router;