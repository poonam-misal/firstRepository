//redclartion and reassignment is not possible
//functional scop as well as globle scop.

const test1 = "cts";
test2 = "Mumai";
console.log(test1);


function fun(){
    console.log(test1);
    console.log(test2);
    const test3 ="pune";
    console.log(test3);
    for(i=0; i<3; i++){
        const test4 = "block";
        console.log(test4);
    }
    // console.log(test4);
    console.log(test3);
}
fun();
console.log(test3);
console.log(test4);