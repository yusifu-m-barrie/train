import { Component, OnInit } from '@angular/core';
// import {NgForm} from "@angular/forms";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  name: string = "Ayon"

  constructor() { }


  ngOnInit(): void {
  }

}
