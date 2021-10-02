var test1:string = "false";
var test2:boolean = true;
var test3:Object = {name:'cts'};
var test4:Object =[1, 2, 3];

var test5 : any ={name:'alex'};
console.log(test5);                                  //{name:'alex'}
console.log(typeof(test5));                          //object

test5=true;
console.log(test5);                                  //true
console.log(typeof(test5));                          //boolean

var test6="alex"; 
console.log(test6);                                  //alex

console.log(test1);                                  //false
console.log(test2);                                   //true
console.log(test3);                                   //{name:'cts'}
console.log(test4);                                      //[1, 2, 3]
