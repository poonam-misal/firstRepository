//calling function from another function.
//Asynchronous functionality.----->multiple evetn excuted at time.execution will not stop for perticular event of code

console.log("first file execution");                  //2 msg will disply.
console.log("second file execution");

//syntax
//setTimeout(funcion,time in milisecond);


setTimeout(() =>{                                               //time set   using  anonymous function
    console.log('thise msg will be printed after 5sec')
},5000);


console.log("third file execution");


function addData(num1, num2) {                                      //fun 
    res = num1+num2;
    return res;
    
    //console.log("this fuction is for addition")          //this fuction is for addition
}
addData();

var stud = {fname:"alex", lname:"simi"};                           //object
console.log(stud);                                      //{ fname: 'alex', lname: 'simi' }

console.log("fourth file execution");
console.log("fifth file execution");

function add() {
    var result = addData(12, 21);
    console.log(result);
}
add();
