//variable :--->It can store data and exchnge the data.
//there are 2 types :--> 1> local variable -->Its allow to be use in some specific block of code.
//                       2>  Globle variable --> It can defined anywhere in js code.

//There are 4 rules:-->
//1>can not use KEYWORDS. eg..case, break, do, else....
//2>can not use NUMBERS.
//3> used  ( _ ).
//4>Case sensitive.


//There are 3 ways to declare a JS variable.(var, let, const).
first = 5;                                         //number
//console.log(first);

second = 'variable'                                //string
//console.log(second);
 
var third = [1, 2, 3];                            //array
//console.log(third);

let fourth = true;                               //boolean
//console.log(fourth)

var five = null;                                 //value
//console.log(five);

const six = {name: 'book', age: 25};               //object
//console.log(six);

var seven = undefined;                            //undefined value
//console.log(seven);

var add = 5+5;
//console.log(add);

var_12abc = 15;                           //can not start used _  
abc_123 = 15;
//console.log(_12abc);

var abc = 20;                                 //case sestive.
var ABC = [8, 9, 0];
console.log(abc);
console.log(ABC);

var ABC = "cts";                                        //its op gives second value
{
var ABC = [4, 5, 6];
}
//console.log(ABC);

//var pune = "anguler";
var text = 10 + 10 + 'cts' + 10 + 15 ;
//console.log(text);

let eight = 90;                                          //its op give first value
{
let eight = 100;
}
//console.log(eight);