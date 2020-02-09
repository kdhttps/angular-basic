import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Todos} from './todos.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  endpoint = '/todo';

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<HttpResponse<Todos[]>> {
    return this.http.get<Todos[]>(environment.api + this.endpoint, { observe: 'response' });
  }
}
