var express = require('express');
var app = express();
var path = require('path')
var TransactionQuery = require('./db/transactionQuery')
var query = new TransactionQuery()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/transactions', function (req, res) {
  query.all(function(results){
    res.json(results);
  });
})

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
