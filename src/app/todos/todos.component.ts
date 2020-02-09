import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';
import {Todos} from './todos.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todos[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    debugger
    this.todosService.getTodos()
      .subscribe(data => {
        debugger
        this.todos = data.body;
        console.log(this.todos);
      });
  }
}
