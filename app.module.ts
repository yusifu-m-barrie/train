import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { StudentsComponent } from './students/students.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    StudentsComponent,
    AboutComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
