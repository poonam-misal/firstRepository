import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { EmployeeModule } from './employee/employee.module';
// import { StudentModule } from './student/student.module';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { TemplateFormComponent } from './template-form/template-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectiveComponent,
    TemplateFormComponent,
  
  ],
  imports: [
    BrowserModule,
    // StudentModule,                  comment kel tri chalel...nhi kel tri chalel
    // EmployeeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
