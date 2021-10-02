import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name :string="Hello ContactComonent"
  link:any ='http://www.google.com/';
  myImagepath:any = 'assets/images/emami.jpg';
  
  paragraph : string="This is a red paragraph ";

  title : string = "Contact Comonant ts using Class Attribute ";
  name1 : string = "Paragraph for title,Class Attribute";

  color : any ="green"


  constructor() { }

  ngOnInit(): void {
  }

}
