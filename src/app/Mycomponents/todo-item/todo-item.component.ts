import { Component ,EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  
  // we have to accept an todo of type Todo
  @Input() todo: Todo = new Todo;

  // here we making an new event emitter (this emmite todo)
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor(){ }

  ngOnInit(): void {
    
  }

  onClick(todo: Todo){
    // whenever someone click on delete button then we emmite an event
    // from todo-item.components to todo.component to delete

    // emite this means(emit todoDelete) event we are giving this output to the parent component
    this.todoDelete.emit(todo);
    console.log("onClick is triggred")
  }
}
