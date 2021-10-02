//"use strict"; 
//use strict is going to check the scope and type of data compulsory 
// var test1 = "CTS Pune";
// let test2 = "CTS Pune";
// const test3 = "CTS Pune";
// test4 = "CTS Pune";

// console.log(test1);
// console.log(test2);
// console.log(test3);
// console.log(test4);




//--------------------------------------------------------------------------------------------------------------------
//var ---->
// var redeclaration , reassignment is possible
// var is having functional scop,globle scop.

var test1 = "globle";
var test2 = "globle1";
console.log(test1,test2);

function fun(){
    var test3 = "functional scop";
    console.log(test1);
    for(i=0; i<5; i++){
    console.log(test3);
    }
    console.log(test3);            //local and globle scop.
}
fun()
console.log(test3);
var test1 = "ALEX";             //redeclaration is possible
test2 = "SIMI";                  //reassignment also possible
console.log(test1, test2);



//2> let
//let is having  block of local scop.
//redeclaration is not possible 
//reassingment is possible.



let sub = "angular"
let sub1 = "JAVA"
console.log(sub, sub1);

function fName(){
    let XYZ = "let function scop"
    console.log(XYZ);
  
    for(i=0; i<3; i++){
        console.log(XYZ);
        let ABC = "let block";
        console.log(ABC);
    }
console.log(ABC);
}
fName();

let sub = "HTML";              //redeclaration is not possible
sub1 = "JS";







//3>  const --->
////redclartion and reassignment is not possible
//its having global scop,functional scop

const city = "mumbai";
const city1 = "goa";
console.log(city, city1);

function funcity(){
    const city2 = "panvel";
    console.log(city2);
    for(i=0; i<3; i++){
        const PNR = "const block of code"
        console.log(PNR);

    }
    console.log(city2);
}
console.log(city2);
const city = "pune";
city2 = "solapur";































































































// var test1 = "Claritech Pune";
// //console.log(test1);                     //claritech Pune

// test1="Mumbai";
// //console.log(test1);                     //Mumbai


// function func(){
//     var test5 ="hello javaScript ";
//     //console.log(test1);                      //mumbai
// for(let i = 0; i < 5; i++){
//     var test6 = "Hello js"
//     console.log(i);
//     console.log(test5);
//     console.log(test6);
//   }
//    }
// func();