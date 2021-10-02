var  x = 1;                     //0001
var y = 2;                      //0010
//prform opration bit by bit.
//AND(&) , OR(|) , XOR(^), NOT(!=)
console.log(x & y);              //0000  ==>0

//console.log(x && y);          // 0000
console.log(x | y);             //0011 ==>3

console.log(x ^ y);            //xor===>0011==>3

console.log(x != y);              //not  ==>1110  ==>14 ==>true