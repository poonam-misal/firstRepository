//this keyword referce the current element.
var stud = {
    fname : "alex",
    lname : "simi",
    age : 15,
    getfullName : function(){
        var fullNm = this.fname +" " + this.lname;
        console.log(fullNm);
        return fullNm;
    }
}
stud.getfullName();
console.log(stud);
// stud.fname = "ctc"
// console.log(stud.fname);


var student = {
    fname : 'Alex',
    lname : 'simi',
    getFullName: function(){
        var fullName = this.fname +''+ this.lname;
        return fullName;

    }
}
var getHobbies = function (hobby1, hobby2) {
    console.log(this.getFullName() +' is having hobbis like ' + hobby1 +' and '+ hobby2);
}
   getHobbies.call( student, 'watching movies','cricket');      //parameter passes with comma( , ) sepreted.
   getHobbies.apply(student, ['watching Movies','Cricket']);    //parameter passes with array.


