import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { retry, catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { ITodo } from '../shared/models/todo';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  private BASE_URL = environment.BASE_URL

  name = 'SAM';

  constructor(private httpClient: HttpClient) { }

  gethelloMessage (): Observable<any> {
    const url = `${this.BASE_URL}/name/Samuel`
    return this.httpClient.get<any>(url).pipe(
      retry(1)
    )

    console.log("gethelloMessage from Services ")
  }

  getAllTodos (): Observable<any> {
    const url = `${this.BASE_URL}/users/${this.name}/todos`
    return this.httpClient.get<any>(url).pipe(
      retry(1)
    )
  }

  getTodoById(id: number): Observable<ITodo> {
    const url = `${this.BASE_URL}/users/${this.name}/todos/${id}`
    return this.httpClient.get<ITodo>(url).pipe(
      retry(1)
    )
  }

  createTodo(todo: ITodo): Observable<ITodo> {
    const url = `${this.BASE_URL}/users/${this.name}/todos`
    // todo.username = this.name;
    return this.httpClient.post<ITodo>(url, todo).pipe(
      retry(1)
    )
  }

  updateTodo(todo: ITodo, id:number): Observable<ITodo> {
    const url = `${this.BASE_URL}/users/${this.name}/todos/${id}`
    return this.httpClient.put(url, todo).pipe(
      retry(1)
    )
  }

  deleleTodo(id:number): Observable<ITodo>{
    const url = `${this.BASE_URL}/users/${this.name}/todos/${id}`
    return this.httpClient.delete<ITodo>(url).pipe(
      retry(1)
    )
  }
}
