//number,string,null,undifined,boolean====>are primitive data type
//object , array are Non primitivr data type

//object is data structure :key value pair.

//array is a special case
//var a = [1,2,3,4]


//object is a data structure : key value pair;
//object creation methods : properties and methods
//age,name,qulifcation,gender  =====>  properties
//etating,walking,reading,talking ===>  methods

var person = {};
person.name = "someone";                        //push the value in person object.
person.age = 25;

person.eat = function(){
    console.log("person is etting")
}
//console.log(person)
//console.log(person.eat())

 //var obj = {};

 //2 ====>  new object with new key
 var person = new Object();
 person.name = "xyz";
 person.age = 10;
console.log(person);
console.log(typeof(person));





//3 ====>

var person2 = {                           //object creat with object value
name : "abc",
age : 20,
qulification : "BE",                      //  , importnat
"123car" :"1234567"                        //  "" used for combination on number and string
}
person2.height = "180cm";                 // push the value in object using dot notification
person2["gender"] = "female"              //bracket notification
console.log(person2);

console.log(person2["height"]);            ///gives the specific value of that point.
console.log(person2["qulification"]);


var person3 = person2;
person3.name = "png";
console.log(person3);
console.log(person3.age);
console.log(person3["age"]);

console.log(person2);



//for in loop

for(var key in person2){
    console.log(key += " " +person2[key]);
}


//object reference data type + array

var car = {
    model : "maruti",
    price : 123456,                          //parent variable

}
var car1 = Object.create(car);                   //child 1 variable
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


//object.assign
let var1 = {fname:"alex"};
let var2 ={lname:"simi"};

let perSon = Object.assign({},var1, var2);               //{ fname: 'alex', lname: 'simi' }
console.log(perSon)






























