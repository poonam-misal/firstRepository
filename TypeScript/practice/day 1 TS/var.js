// var redeclaration , reassignment is possible
// var is having functional scop,globle scop.




var test1 = "globle Scop";
var test2 = "globle scop1";


// console.log(test1);
// console.log(test2);

function fun(){
    // console.log(test1);
    var test3 = "functionScop";
    console.log(test3);
    for(i=0; i<5; i++){
        var test4 ="block";
        // console.log(test1);
        // console.log(test2);
        console.log(test3);
        console.log(test4);
    }
//  console.log(test1);
//  console.log(test2);
 console.log(test3);
 console.log(test4);                           
}
fun();
// console.log(test1);                   //globle,functional,block of code scop.
console.log(test4);                      //block scop  not dot op
console.log(test3);                       //test3 is function scop  becouse it is defined in function.
