var MongoClient = require('mongodb').MongoClient;

var TransactionQuery = function(){
  this.url = 'mongodb://localhost:27017/cashboard';
}

TransactionQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('transactions');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
  
    });
  }
}

module.exports = TransactionQuery
