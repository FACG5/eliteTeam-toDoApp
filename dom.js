// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");
  var donecontainer = document.getElementById("done-container");
  var sort = document.getElementById("sort");


  var state = JSON.parse(localStorage.getItem('state')) || [];
  // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");

    // todo.id=todoNode.id;

    // you will need to use addEventListener

    // add span holding description

    // this adds the delete button
    var span = document.createElement("span");
    span.textContent = todo.description;
    todoNode.appendChild(span);

    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.classList.add("del");

    deleteButtonNode.textContent = "delete";
    

    todoNode.appendChild(deleteButtonNode);
  

    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });


    // var EditButtonNode = document.createElement("button");
    // EditButtonNode.textContent = "Edit";
    // todoNode.appendChild(EditButtonNode);

    // EditButtonNode.addEventListener("click", function(event) {

    //   var newState = todoFunctions.editTodo(state, todo.id);
    //   update(newState);
    // });


    var MarkButtonNode = document.createElement("button");
    MarkButtonNode.classList.add("mark");

    if ((todo.done === false)) {
      MarkButtonNode.textContent = "Mark";
    } else {
      MarkButtonNode.textContent = "UnMark";
    }
    todoNode.appendChild(MarkButtonNode);
    MarkButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });

    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      event.preventDefault(); //event.target
      var description = event.target.description.value;
      if (description.trim() != "") {
        var newState = todoFunctions.addTodo(state, description);
        update(newState);
        event.target.description.value = "";
      } else {
        alert("Please Enter a TASK");
      }
    });
  }
  if (sort) {dTodoForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    var newState = todoFunctions.sort(state, description);
        update(newState);

  })};
  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");
    var doneListNode = document.createElement("ul");

    state.forEach(function(todo) {
      if (todo.done === true) {
        doneListNode.appendChild(createTodoNode(todo));

      } else {
        todoListNode.appendChild(createTodoNode(todo));
      }
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);

    // you may want to add a class for css
    donecontainer.replaceChild(doneListNode, donecontainer.firstChild);

    localStorage.setItem('state', JSON.stringify(state));    

  };

  if (container) renderState(state);
})();
