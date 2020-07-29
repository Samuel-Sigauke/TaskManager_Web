import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

const routes: Routes = [
    { 
        path: '', component: LoginComponent,
    },
    {
        path: 'create/:id', component: CreateTodoComponent,
    },
    {
        path: 'create', component: CreateTodoComponent,
    },
    {
        path: 'todos', component: ListTodosComponent,
    },
    {
        path:'**', component: LoginComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRoutingModule { }