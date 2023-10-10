import { Component } from '@angular/core';

// @ -> component decoractor 
@Component({
  // says which tab has this component (here we use element selector)
  selector: 'app-root',

  // what is the url of the tamplate of this component
  templateUrl: './app.component.html',

  // from where we can get the style
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  // constructor(){
  //   setInterval(() => {
  //     if(this.title==="todo-list")
  //       this.title = "Let's change the title";
  //     else
  //       this.title = "todo-list";
  //   }, 2000);
  // }
}
// this type script file most impotant file (how this module word comes in this file)

// to include boottrap we have to run command (npm install bootstrap) -> go to angular.json
// -> find build -> in style add -> "./node_modules/bootstrap/dist/css/bootstrap.min.css"
// -> in scripts add -> "./node_modules/bootstrap/dist/js/bootstrap.js"

// to genrate new component -> ng generate component "file name eg:: Mycomponent/todos "

// in most of the cases we do devolepment on app folder only