var x = 15;
var y = 20.5;
var z = 4 + 4 + (10/2);

//console.log(typeof(x));                             //method===>   typeof()
//console.log(x.valueOf());                            //method ===>  .valueof()


//console.log(typeof(y));
//console.log(y.valueOf());

//console.log(z);
//console.log(typeof(z))
//console.log(z.valueOf());


//2.to string
var test1 = x.toString();                            // number conver in string op will be in string
//console.log(test1);
//console.log(typeof(test1));

//console.log(x == test1);                               // 15 == "15"            true
//console.log(x === test1);                                // type of 15 === type of "15"       false


var test2 = 3 + '9' + 1 + 2 + '4' + '5';
//console.log(test2);
//console.log(typeof(test2));


var test3 = 5 - 6;
console.log(test3);                              //-1
console.log(typeof(test3));                   //number
var test4 = 5- 6 + ' 8';
console.log(test4);                                 //-1 8
console.log(typeof(test4));                       //string
var test5 = 'a' - 'b'
console.log(test5);                                //NaN
console.log(typeof(test5))                     //number




