
//object.assign---->creat the new object of params

var pern ={name:"alex", age :15};
var per = Object.assign({weight:85},pern);
console.log(per);                                   //



//object.is------> determine the values are same or not.
let a = 10 ;
let b = 10 ;
console.log(Object.is(a,b));                      //true


let per1 = {name:'ctc'}
let per2 = {age:'pune'}

// per1 and per2 doesn't have same reference.
console.log(per1==per2);                           //false
console.log(per1===per2);                           //false 


let per4 = 10;
let per5 = 15;
console.log(per4==per5);                             //false
console.log(per4===per5);                            //false.
console.log(Object.is(per4,per5));



var x = "cts";
var y = "cts";
console.log(Object.is(x,y));                          //true