import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: "employees-component",component :EmployeesComponent},
  {path :"students-component",component :StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
