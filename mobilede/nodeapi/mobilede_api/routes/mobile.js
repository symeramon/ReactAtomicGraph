var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/filters', function(req, res, next) {
    var data = fs.readFileSync(process.cwd() +'/data/ListData.json');
    var list= JSON.parse(data);
    var filters= JSON.parse(req.query.filtersi);

    const filteredData = list.filter((el) => {

        if (filters.filtreler.length > 0 && req.query.input === "") {
            return el.id.some(r => filters.filtreler.includes(r));
        }
        else if (req.query.input === "") {
            return el;
        }
        else if (filters.filtreler.length > 0) {
            return el.text.toLowerCase().includes(req.query.input) && el.id.some(r => filters.filtreler.includes(r))
        }
        else {
            return el.text.toLowerCase().includes(req.query.input)
        }

    })

    console.log(filteredData)
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, 'Content-Type' : 'multipart/form-data' ,* "
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    res.json(filteredData);
   
});

router.get('/ListData', function(req, res, next) {
    var data = fs.readFileSync(process.cwd() +'/data/ListData.json');
    var myObject= JSON.parse(data);
      res.json(myObject);
   
});

module.exports = router;