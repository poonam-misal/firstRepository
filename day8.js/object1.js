var object ={};
object.name = "xyz";
object.age = 20;
object.walk = function(){
    console.log('object waliking');

}

console.log(object);
console.log(object.walk);
console.log(object.walk());



//new object with new keyword
var test1 = new Object()
test1.color = "red";
test1.hight = "147cm";
console.log(test1)



var test2 = {
    name : "pqr",
    rollno : 4,
"12car" : "car",
}

test2.color ="red";

test2.gender ="female";
test2.hight = "134cm";
console.log(test2);
console.log(test2.rollno);
console.log(test2["12car"]);


console.log(test2);


var car ={
    name : "Maruti",
    color : "pink",
    
}
var car1 = Object.create(car);
car1.avg = "50km";
console.log(car1)
console.log(car1.__proto__);






var a = {fname:"lmn"};
var b = {lname:"opq"};
var per = Object.assign({age:29},a,b);
console.log(per)



















