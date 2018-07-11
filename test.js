var test = require('tape');
var logic = require('./logic');


//add test
test('Example test', function(t) {
  var actual =logic.addTodo([],"homework");
 var expected = [{id:1,description:'homework',done:false}];
t.deepEqual(actual,expected,'object returned is true');
  t.end();
});

//to do array
todos =[{

  id: 1,
  description: "drawing",
  done: false
},{
  id:2,
  description: "washing",
  done: false

}];

//delete test
test('Example test', function(t) {
  var actual =logic.deleteTodo(todos,1);
 var expected = [{id:2,description:'washing',done:false}];
t.deepEqual(actual,expected,'the id was deleted');
  t.end();
});

//mark test
test('Example test', function(t) {
  var actual =logic.markTodo(todos,1);
 var expected = [{

  id: 1,
  description: "drawing",
  done: true
},{
  id:2,
  description: "washing",
  done: false

}];
t.deepEqual(actual,expected,'the id was marked');
  t.end();
});






