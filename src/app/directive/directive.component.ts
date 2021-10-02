import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  //stuctural Directive

  showDataFlag:boolean = true;             //ngIF                 

  
  section:any = ['Home','ContactUs','AboutUs'];         //ngFor

   num:any = 6;                                         //ngSwich

   //attribute Directives

   
   myClass1:any ="test1";                             //ngClass
  //  myClass2:any = "test2";
   constructor() { }

  ngOnInit(): void {                                       //ngClass
    // if(this.showDataFlag == false){
    //   this.myClass1 = "test2";
    // }
    // else{
    //   this.myClass1 = "test1";
    // }
   }


   color: any="blue";                                        //ngStyle
   background="red";
  fontSize:any= "30px"
  }


