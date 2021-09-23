import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title:string
  desc:string
  @Output() todoAdd: EventEmitter<Todo>  = new EventEmitter();
  constructor() { 
    this.title = "";
    this.desc = "";

  }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      no: 8,
      title : this.title,
      desc : this.desc,
      active: true
    } 
    this.todoAdd.emit(todo)
  }
}
