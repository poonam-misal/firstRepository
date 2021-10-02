//while:--->loops through a block of code while a specified condition is true.

var count = 3;

while(count < 10){
    console.log(' Counting ' + count);
    count ++;
}


//dowhile:---->  code of block is execated before testing condition.

var counter = 10;
do{
    console.log('correct');
    counter ++;
}
while(counter < 15);


var counter = 16;
do{
    console.log('not correct');
    counter ++;                           //16+1==17
}
while(counter < 15);                     //17 < 15