import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentComponent} from "./department/department.component";
import {StudentsComponent} from "./students/students.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: 'department', component: DepartmentComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
