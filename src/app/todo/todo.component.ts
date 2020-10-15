import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export interface Todo {
  title:string;
  done:boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() public todo:Todo;
  @Output() onDone: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
