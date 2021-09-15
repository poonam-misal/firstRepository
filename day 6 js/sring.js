var test1 = "Claritech solutions, Pune";

console.log(test1);

//1.typeof()
console.log(typeof(test1));

//2.    .valueof()
console.log(test1.valueOf());

//       .charAt()
var test2 = test1.charAt(5);
console.log(test2);                     //    t====> after 5

var test2 = test1.charAt(10);            // space aslo include after 10
console.log(test2);        

var test2 = test1.charAt(21);
console.log(test2); 

//    .lenght
console.log(test1.length);                 //number of chracters invlude all symbolls ,space




//5.      .charCodeAt()
var test3 = test1.charCodeAt(5);
console.log(test3);
//will return the ASCII value of that charter.



//concatination
var test4 = test1 + ' Software Company';
console.log(test4);

var test4 = test1 +  6;
console.log(test4);



//7. .indexOf()
var test5 = test1.indexOf('Pune');                //21  ===>P start from 21 no.
console.log(test5);

var test5 = test1.indexOf('Mumbai');
console.log(test5);                              //-1     ===>not defined mumbai

//8.      .replace()
var test6 = test1.replace('Pune', 'Mumbai');     //it will find the value Pune then replace the mumbai
console.log(test6);                              //otherwise original sring will be display.


//9.   .search()
var test7 = test1.search('Pune');                 //21     find 1st Pune
console.log(test7);

var test7 = test1.search('mumbai');                 //-1       notfinding
console.log(test7)


//10.     .slice()
console.log('xxxxxx');
var test8 = test1.slice(3,5);                       // ri====>  3==start number        5==>end number(-1)
console.log(test8);                                 //3==r    4==i



//11.     .split()
var test9 = test1.split('Claritech');
console.log(test9);
//will return new array depending on provided condition & that condition willbe removed from new array.




//12.       .substr()
var test10 = test1.substr(3,5);                 //3==>r    and 9 will be no of charachters.
console.log(test10);                             //5==> cont will be staring 3

//13.       .uppercase()
var test11 = test1.toLocaleLowerCase();
console.log(test11);


var test12 = test1.toLocaleUpperCase();
console.log(test12);




























