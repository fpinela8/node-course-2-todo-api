//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to DB server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("594d5f0d2f940f61b724fe21")
  // }, {
  //   $set: {
  //     completed:true
  //   }
  // }, {
  //     returnOriginal:false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("594c316b44c54c2444849b77")
  }, {
    $set: {
      name: 'NewName'
    },
    $inc: {
      age: 10
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();

});
