// Create global variable to access it on the console
var todos = ["Buy New Turtle"];

// setTimeout to be able to see the HTML before the popups
window.setTimeout(function() {

  var input = prompt("What would you like to do?");
  
  while(input !== "quit") {
    // Handle input
    if(input === "list") {
      listTodos();
    }
    else if (input === "new") {
      addTodo();
    }
    else if (input === "delete") {
      deleteTodo();
    }
    input = prompt("What would you like to do?");
  }

  console.log("Ok, you quit the app!");
}, 500);

function listTodos() {
  console.log("**********");
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo() {
  var newTodo = prompt("Enter new todo:");
  todos.push(newTodo);
  console.log("Added Todo.");
}

function deleteTodo() {
  var i = prompt("Enter index of Todo to delete:");
  todos.splice(i, 1);  // Removes 1 item starting at index i
  console.log("Deleted Todo.");
}