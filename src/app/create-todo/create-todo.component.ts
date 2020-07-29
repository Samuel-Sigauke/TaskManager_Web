import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelloWorldService } from '../services/hello-world.service';
import { ITodo } from '../shared/models/todo';
import { formatDate, getLocaleDateTimeFormat, DatePipe } from '@angular/common';
import { toDate } from '@angular/common/src/i18n/format_date';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  id: number;
  todoData: ITodo;
  obj: any;
  targetDate: any;
  year: string;
  month: string;
  day: string;
  // description: string;


  constructor( 
    private route: ActivatedRoute,
    private helloService: HelloWorldService,
    private router: Router,
  ) {}

  ngOnInit() {
    
    this.todoData = {};
    this.id = this.route.snapshot.params['id']
    if(this.id){
      this.fetchTodoById();
    }
  }

  fetchTodoById(){
    this.helloService.getTodoById(this.id).subscribe(
      res => {
        res.targetDate = res.targetDate.slice(0,10);
        this.todoData = res
      }
    )
  }

  onSave() {
    if(this.id){
      
      this.todoData.username = "Sam";
      this.helloService. updateTodo(this.todoData, this.id).subscribe(
        res => {
          alert("Todo updated Successfully");
          this.router.navigate(['/todos']);
        }
      )
    }else{
      this.todoData.username = "Sam";
      this.helloService.createTodo(this.todoData).subscribe(
        res => {
          alert("Todo created Successfully");
          this.router.navigate(['/todos']);
        }
      )
    }
  }
}
