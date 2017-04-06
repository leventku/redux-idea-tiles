const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// enable cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/ideas', function(req, res) {
  res.send([{   
    "id": 1,
    "created_date": "2017-04-05T10:48:37.107Z",
    "title": "first express idea",
    "body": "body text of the first idea"
  }]);
});

let nextId = 2;
app.get('/ideas/new', function(req, res) {
  res.send([{   
    "id": nextId++,
    "created_date": new Date().toISOString(),
    "title": "",
    "body": ""
  }]);
});

app.post('/idea/update', function(req, res) {
  res.json(req.body);
});

app.post('/idea/delete', function(req, res) {
  res.json(req.body);
});

app.listen(3000);
console.log('listening on port 3000')