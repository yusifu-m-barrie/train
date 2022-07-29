import { Component } from '@angular/core';
import {UbuntuStudents} from "./MyClass/UbuntuStudents";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';


  myStudent: UbuntuStudents = new UbuntuStudents();

  allStudent: UbuntuStudents[]=[
    {id: 1, name: "Ayon", surname: "Barrie", age: 30},
    {id: 2, name: "Yusifu", surname: "Barrie", age: 40},
    {id: 3, name: "Amadu", surname: "Bah", age: 55},
    {id: 4, name: "Weezzy", surname: "Bah", age: 22}
  ];

  saveStudent(form: NgForm){

    this.allStudent.push(this.myStudent);
    // form.reset()
  }
}


