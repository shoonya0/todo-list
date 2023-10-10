import { NgModule } from '@angular/core';

// use for dom manupulation
import { BrowserModule } from '@angular/platform-browser';

// use to oper page without reloding
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { TodoItemComponent } from './Mycomponents/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// this file is the entry point in our angular
