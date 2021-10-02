//let is having functional scop,globle scope, block of local scop.
//redeclaration is not possible 
//reassingment is possible. 

let test1 = "globle scop";
let test2 = "globle scop2";
// console.log(test1,test2);



function fun() {
     console.log(test1);
     let test3 = "functionScop"
     console.log(test3);
    for(let i=0; i<3; i++){
        
      console.log(i);
      console.log(test2);
      console.log(test3);
      let test4 = 'block'
    }
    // console.log('hello' +i)
    console.log(test1);
    console.log(test3);
    // console.log(test4)
    
}
fun();
console.log(test2);
 console.log(test3);
