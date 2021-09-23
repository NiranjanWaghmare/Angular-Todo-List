import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i : number;
  @Output() todoDelete: EventEmitter<Todo>  = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo>  = new EventEmitter();
  constructor() {
    this.i = 0;
    this.todo = new Todo ;
   }
  
  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
    
  }

}
