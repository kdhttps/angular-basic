import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Todo} from './todos.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  endpoint = '/todos';

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<HttpResponse<Todo[]>> {
    return this.http.get<Todo[]>(environment.api + this.endpoint, { observe: 'response' });
  }

  addTodo(todo): Observable<HttpResponse<Todo>> {
    return this.http.post<Todo>(environment.api + this.endpoint, todo, { observe: 'response' });
  }
}
