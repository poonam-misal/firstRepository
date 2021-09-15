//cookirs
 /*
  document.cookie = 'cityPune';
  data = [1,2,3]
  var myCookies = document.cookie;
  console.log(myCookies);
*/

 
document.cookie="username=javascipt ";
//data = [1, 2, 3];
var myCookie = document.cookie;
console.log(myCookie)






//local storage:

data = "CTS Pune";

localStorage.setItem('compnyName', data);

var res = localStorage.getItem('compnyName');

//var res = localStorage.removeItem('compnyName');
//var res = localStorage.clear('compnyName');
console.log(res);



//session storage:

data = "session storage";

sessionStorage.setItem('compnyName', data);

var res1 = sessionStorage.getItem('compnyName');

console.log(res1)

data2 = "angular";
sessionStorage.setItem('newData', data2);
var res2 = sessionStorage.getItem('newData');
console.log(res2)











