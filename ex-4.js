const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  // Start coding here
  let completedTodo = [];
  for (let i = 0; i < todos.length; i++){
    if(todos[i].completed === true){
      completedTodo.push(todos[i]);
    }
  }
  return completedTodo
}

let updateTodos = getCompletedTodo(todos);
console.log(updateTodos)

/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
