
//object , array are Non primitive data type
//object, array reference data type  
//object is data structure :key value pair.
//object is collection of properties and methods.

//array is a special case
//var a = [1,2,3,4]

//age,name,qulifcation,gender  =====>  properties
//etating,walking,reading,talking ===>  methods


//1> normal object.
var person = {};
person.name = "someone";                        //pass the value using key.
person.age = 25;

person.eat = function(){
    console.log("person is etting")                   //pass the method using function.
}
person.eat();
console.log(person)                             //{ name: 'someone', age: 25, eat: [Function (anonymous)] }
// console.log(person.eat())                      //undefined
console.log(person.name)
console.log("xxxxxxx")

 
//var obj = {};

 //2 ====>  new object with new key
 var person = new Object();
 person.name = "xyz";
 person.age = 10;
//console.log(person);                          //{ name: 'xyz', age: 10 }
//console.log(typeof(person));





//3 ====>object creat with it self key & value
//dot and bracket notification.

var person2 = {                           
name : "abc",
age : 20,
qulification : "BE",                      //  , importnat
"123car" :"1234567"                        //  "" used for combination on number and string
}
person2.height = "180cm";                 // push the value in object using dot notification
person2["gender"] = "female"              //bracket notification (we can not got the op with the help of dot.``)
person2["13car"] = "12345";
console.log(person2);

console.log(person2["height"]);            ///gives the specific value of that point.
console.log(person2["qulification"]);


var person3 = person2;
person3.name = "png";
console.log(person3);
console.log(person3.age);
console.log(person3["age"]);

console.log(person2);



//for in loop      ----> loops through the properties of an object.

for(var key in person2){
    console.log(key += " " +person2[key]);           //get values all key in person2
}



//object.create ----->as like a parent and child.
var car = {
    model : "maruti",
    price : 123456,                          //parent variable

}
var car1 = Object.create(car);                   //child 1 variable (related to car.)
var car2 = Object.create(car1);                 //child 2 variable
 //console.log(car1);
car1.color ="gray";
car1.varient ="ZTI",
car1.avg = "50km"
 console.log(car1)                           // here got only car1 object not geting car object.
console.log(car2.__proto__);                 //
// car2.price = 50000;
console.log(car2.price)                      // if u want key value then difined key.



var stud = {};
stud.eat =function(){
    console.log("preson is eating")
}


var student = {
    name : "vivek",
    rollno : 12,
    last5yrPer : function last2yr(currentMarks, lastYearMarks){
        var res = ( currentMarks + lastYearMarks)/2;
        return res;

    }
}
console.log(student.name);
console.log(student);                               //{ name: 'vivek', rollno: 12, last5yrPer: [Function: last2yr] }
console.log(student.last5yrPer(89,91));            //90


var car3 = Object.create({compony:"mhindra", nme:"xuv",color:"red"})
car3.model="tuv 700";
console.log(car3.model);                      //tuv 700
console.log(car3.__proto__);              //{ compony: 'mhindra', nme: 'xuv', color: 'red' }



//------------------------------------------------------------------------------------------------------------//
//object.assign
let var1 = {fname:"alex"};
let var2 ={lname:"simi"};

let perSon = Object.assign({},var1, var2);               //{ fname: 'alex', lname: 'simi' }
console.log(perSon)






























