//spread is used to work on individual or combination of array or object.
//can work on array or object or both at a time.

var test1 = [1, 2, 3, 4];
var test2 = [5, 6, 7, 8];



// var x = 0+','+test1.concat(test2)+','+ 9;
// console.log(x);

var test3 = [0,...test1,...test2];
console.log(test3);
var test4 = [...test1, 9, 0];
console.log(test4)



var test5 = {name:'cts',age:'15'}
var test6 = {gender:'female'};

// var y = test5.concat(test6);
// console.log(y)

var test7 = {...test5,...test6}
console.log(test7)

//'concat()' will add the elements at the end of the array 
//while spread operator can be used to add elements at any part of the array.


var m = [9,8,7];
var n = {name:'poonam'};
var o = [...m,{...n}];
console.log(o);                             //[ 9, 8, 7, { name: 'poonam' } ]








