import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsComponent } from './forms/forms.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentsComponent } from './students/students.component';
import { ExampleanimationsComponent } from './exampleanimations/exampleanimations.component';



@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        FormsComponent,
        ProductsComponent,
        EmployeesComponent,
        StudentsComponent,
        ExampleanimationsComponent,
       
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
        
    ]
})
export class AppModule { }
