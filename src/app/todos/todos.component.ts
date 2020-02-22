import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';
import {Todo} from './todos.interface';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  todo: Todo = {} as Todo;
  todoForm: FormGroup;

  constructor(private todosService: TodosService, private modalService: NgbModal, private fb: FormBuilder) {
    this.todoForm = fb.group({
      name: '',
      description: ''
    });
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todosService.getTodos()
      .subscribe(data => {
        this.todos = data.body;
        console.log(this.todos);
      });
  }

  addTodoAddModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'todo-modal'})
      .result.then((result) => {
        Object.assign(this.todo, this.todoForm.value);
        this.todosService.addTodo(this.todo)
          .subscribe((todo) => {
            this.getTodos();
            this.todoForm.reset();
          });
    }, (reason) => {
        console.log(reason);
    });
  }
}
