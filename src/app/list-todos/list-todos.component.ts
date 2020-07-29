import { Component, OnInit } from '@angular/core';
import { ITodos } from '../shared/models/todo';
import { HelloWorldService } from '../services/hello-world.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  msg: any;
  todosData: any;
  id: number;

  todos = [
    { id: 1, description: 'To do app', status: 'In progress', targetDate: new Date() },
    { id: 2, description: 'Spring framework', status: 'Pending', targetDate: new Date() },
    { id: 3, description: 'Angular Material', status: 'In progress', targetDate: new Date() }
  ]
  
  constructor( 
    private helloService: HelloWorldService,
    private router: Router,
    ) { }

  ngOnInit() {

    this.findAllTodos()
  }

  onPrintmsg(){
    this.helloService.gethelloMessage().subscribe(
      res => {
        alert(res.message)
        console.log(res.message)
      }
    )
  }

  findAllTodos(){
    this.helloService.getAllTodos().subscribe(
      res => {
        this.todosData = res;
      },
      error => {
        console.log('fetch error ', error)
      }
    )
  }

  onDelete(todo) {
    this.id = todo.id
    this.helloService.deleleTodo(this.id).subscribe(
      res => {
        alert("Successfully deleted todo with id " + this.id)
        this.findAllTodos();
      },
      error => {
        alert("failed to delete todo!")
      }
      
    )
  }

  onUpdate(todo) {
    this.id = todo.id;
    this.router.navigate([`/create`, this.id],{
      //queryParams: { id: this.id },
    })
  }
}
