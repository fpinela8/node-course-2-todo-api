const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

Todo.findByIdAndRemove('594fb08d81cc6353c6d9aa55').then((todo) => {
  console.log(todo);
});
//Todo.remove()
