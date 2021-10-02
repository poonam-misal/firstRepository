import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }
  courses:any=['E&tc','mechanical','Electronic']
  ngOnInit(): void {
    
  }
  onSubmitForm(formData:any){
    console.log(formData.value)

  }

}
