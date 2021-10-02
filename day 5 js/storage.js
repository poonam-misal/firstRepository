//srorage option:-----> store data of user which can be used later. 
//there are 3 type:---->1> cookies
//                      2> local storage
//                      3> session storage



//cookies :----->syntax:----> document.cookie = "cookoiesName = cookiesValue ; expires: expirDate".
 //some limitation -----> less secure , maxmimum limit 4k , per website only 20 cookies stored.,any one can disable cookies
  document.cookie = 'cityPune';
  data = [1,2,3]
  var myCookies = document.cookie;
  console.log(myCookies);


 
document.cookie="username=javascipt ";
//data = [1, 2, 3];
var myCookie = document.cookie;
console.log(myCookie)



//local storage:

data = "CTS Pune";

localStorage.setItem('compnyName', data);             //key,value.

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











