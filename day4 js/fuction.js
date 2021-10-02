//function:---->Block of code to executed some opreation.


//ther are 2 type:---->1> Built in function.
 //                    2> User difined function.

// syntax of function :---->  
//                            function functionname(parameter-list){
//                                      block of code
//                              }functionname(parameter-passes);                ---->it is fun call



function add(a,b) {          //add  ==>name of function.
    console.log(a,b)            //ans ==>10 20
}
add(10,20);                    //parameter defined and call function



function add(a, b) {
    var c = a + b;
    console.log(c);            //ans==> value of c
    return c;           //stored the value of c
    
}

var result = add(20, 20);                    //pareameter defined
console.log(result);                    //ans==>value of c


function add(fn, ln) {             
    NAME = fn + ln;
    return NAME;
    
}
var result=add('poonam', 'misal');
console.log(result);


function add(a, b) {
    var c = a + b;
    // console.log(c);                         //ans==> value of c
return c;
}
    function sub(x) {
     return x;
        
    }
                                 
var result =add(2, 4);
console.log(result)                      //6


var result1= sub(5);
console.log(result1);                  //5
