function fun(x){
    console.log("fiest function" +x);
}
fun(12);

var test1 = function(x){
    console.log('with variable function'+x);

}
test1('js');


var test2 = (x)=>{
    console.log("arrow fnction"+' '+ x)
}
test2("javaScript");



var test3 = x => 'hello' + ' '+x;
console.log(test3('javaScript'));



var test4 = (x,y)=>"hello"+ ' '+ x +' ' + y;
console.log(test4('javaScript','angular'));


