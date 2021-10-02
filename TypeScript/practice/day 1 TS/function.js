//default params

function add(num1,num2){
    console.log(num1+num2);
}
add(10,20);           //30

function add(num1, num2=15){
    console.log(num1+num2);

}
add(25);            //40

function add(num1=10,num2=20){
    console.log(num1+num2)
}
add(40);                      //leates value=====>60

function add(num1=15, num2=16){
    console.log(num1+num2);

}
add(16);                             //32   1st parameter have option
add(55,45);                         //100


//OPtionalparameter

function fullName(fName, mName, lName){
             console.log(mName);
             if(mName !=undefined){
                 console.log(fName + mName + lName)
             }
             else{
                console.log(fName + lName)
             }
}
fullName('poonam','misal');

//2.Template Literals

let test1 = "cts Pune";
let test2 = `cts
Pune`;
console.log(test1);
console.log(test2);

let test3 = `I am working at ${test1}`
console.log(test3);



//3.Arrow Function
//there are a multiple way to write a function in js
//I. Normal function

function fun1(){
    console.log('Thise is normal function');
}
fun1();                                               //thise is a normal funcion

//II
var fun2 = function(){
    console.log('thise is a function with a variable')
}
fun2();                                               //thise is a function with a variable


//III  Arrow Function
var fun3 = ()=>{
    console.log('thise is a arrow function')        //thise is a arrow function
}
fun3();


//IV
var fun3 = (dt)=>{
    console.log('thise is a arrow function'+ ' '+dt);
}
fun3("cts");                            //thise is a arrow function cts


//V
var fun4 = dt => 'hello' + dt;
console.log(fun4('angular'));                       //hello angular


var fun4 = (dt, dt1) => 'hello' + dt +dt1;
console.log(fun4('Angular',' Java'));


//VI anonymous function
(()=>{
    console.log('hi php');
})();


()=>{
    console.log('hello angular');                       //hello angular
}
var test5 = setInterval(()=>{
    console.log('Hello angular');
},1000);

clearInterval(test5);






























    

    




































