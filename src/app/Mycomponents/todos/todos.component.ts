import { Component,OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // todos array of type Todo
  todos:Todo[];

  constructor(){ 
    this.todos = [
      {
        sno: 1,
        title: "This is title 1",
        desc: "Description",
        active: true
      },
      {
        sno: 2,
        title: "This is title 2",
        desc: "Description",
        active: true
      },
      {
        sno: 3,
        title: "This is title 3",
        desc: "Description",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

  // todo is type of Todo
  deleteTodo(todo :Todo){
    // here we are finding the index of todo int todos for type Todo
    const index = this.todos.indexOf(todo);

    // removing 1 element from index
    this.todos.splice(index,1);
    console.log(todo);
  }
  
  // adding todo whenever an event emitter is fire from add-todo.component
  addTodo(todo :Todo){
    console.log(todo);
    this.todos.push(todo);
  }
}
