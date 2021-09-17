var test = true;

console.log(test);
console.log(typeof(test));

console.log(test);                     //true       ==string
console.log(test.valueOf());           //true
console.log(test.valueOf());            //true    ==string
var res = console.log(test.toString());  //true     ==value
console.log(typeof(res));                 //undefined