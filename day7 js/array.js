var test1 = ['ni','mahessh','shivani','vishnu','asithosh','nisha','savita'];
// console.log(test1[0]);
// console.log(typeof(test1[0]));
// console.log(typeof(test1));
// console.log(test1.length);


// //push
//  var test2 = test1.push('Rahul');
// console.log(test2);                             //8
//  console.log(test1);                          //at last array add rahul
 //push is going to add new element at the end of an array & thise will be return new length of array


 //pop
// var test3 = test1.pop();
// console.log(test3);                      //savita===> lastv element gives op
// console.log(test1)                       //without last element gives array
//pop is will be remove last elelment of array &return that last element


// //unshift
// var test4 = test1.unshift('vivek');
// console.log(test4);                           //8
// console.log(test1);                           //at the 1st element will be add.
// //unshift is going to add new element at the start of array & this will return lenght of new array.


// //shift
// var test5 = test1.shift();
// console.log(test5);                                              //vivek
// console.log(test1);                                             //
// //shift is will remove first element of array and will return that first/removed element.



//slice
// console.log(test1);
// var test6 = test1.slice(2,4);
// console.log(test6);
// console.log(test1);

//slice (start index, last index-1);
//silce going to return new array of given index and end index.
//text 1 is not change


// //splice
 console.log(test1);
// var test7 = test1.splice(0,3);
var test7 = test1.splice(0,6, 'archana', 'ashvini');
console.log(test7);                 //remove element
console.log(test1);               //not remove data + new element
// //splice(star index, how many to remove,new elements to be added);
// //splice is used to add or remove element from an array.
// //thise method will return removed elements
// //if no new added element are there then also thise will perform opration 



// //join
// var test9 = test1.join();
// console.log(test9);                       //op gives without array
// console.log(test1);
//join ==> will convert array to string.
//split ==> will convert to sreing to array.


// //concat
// // console.log(test1);
// var test8 = ['chameli', 'komal', 'kapil'];
// var test10 = test1.concat(test8);
// console.log(test10);
// console.log(test1);


// //reverce
// var test11 = test1.reverse();
// console.log(test11);


// //combination of split and reverse
// var test12 = "Claritech Solutions, Pune"
// var test13 = test12.split('').reverse().join('');
// console.log(test13);


//tostreing
// test1.reverse()
// console.log(test1);
// var test14 = test1.toString();
// console.log(test14)


// //12 map
// var test15 = [1,2,3,4,5];
// var test16 = test15.map(item =>item*5);
// console.log(test16)



// //13filter


// var test17 = test15.filter(item => item%2 ==0);
// console.log(test17);


// //reduse
// var test18 = test15.reduce(function(res, item){
//     return res +item
// }, 0);

// console.log(test18);
