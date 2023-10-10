import { Component ,Input,OnInit} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  
  // we have to accept an todo of type Todo
  @Input() todo: Todo = new Todo;

  constructor(){ }

  ngOnInit(): void {
    
  }

  onClick(){
    console.log("onClick is triggred")
  }
}
