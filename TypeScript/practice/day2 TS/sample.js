var test1 = "false";
var test2 = true;
var test3 = { name: 'cts' };
var test4 = [1, 2, 3];
var test5 = { name: 'alex' };
console.log(test5); //{name:'alex'}
console.log(typeof (test5)); //object
test5 = true;
console.log(test5); //true
console.log(typeof (test5)); //boolean
var test6 = "alex";
console.log(test6); //'alex'
console.log(test1); //false
console.log(test2); //true
console.log(test3); //{name:'cts'}
console.log(test4); //[1, 2, 3]
