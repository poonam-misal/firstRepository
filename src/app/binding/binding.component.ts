import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  // constructor() { }

  //Interpolation
  name :string="Hello Binding";
name2 : any = "Testing Binding Componant";



//Attribut binding

color: any="gray"
form: any="Regisration form";

myBoolean:boolean=true;
link:any;
ngOnInit(){
  if(this.myBoolean==true){
    this.link="https://www.google.com"
}
}
defaultName:any="poonam";
defaultAdd:any="Address";
defaultEmail:any="xyz@gmail.com";
gender:any="g";



myAge:number=18;
image:any;
constructor(){
  if(this.myAge==17){
this.image="assets/images/emami.jpg"
}
else{
  this.image="assets/images/2image.png"
}
}
 
 //event binding
  showData(){
    console.log("Event Binding Function");
  }

  //two way data bimding
  age:number=5
 


}
