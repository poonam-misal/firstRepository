//switch:---->to select one of many block of code to be executed.
//time consuming.



/*console.log(new Date().getDay());
var day;
switch(new Date().getDay()){
    case 0:
    day = 'Sunday';
    break;

    case 1:
    day = 'Monady';
    break;

    case 2:
    day = 'Tuesday';
    break;

    case 3:
    day = 'wednesday';
    break;

    case 4:
    day = 'thursday';
    break;

    default:
    day = 'saturady';
    break;


}
console.log('day');*/



var text;
switch(new Date().getDay()) {
        case 1:
        text = "good";
        break;

        case 2:
        text = "bad";
        
        break;

        case 3:
         text="almost bad";
        break;


         case 4:
          text="almost good";
          break;


        case 5:
         text="very bad";
        break;

        case 6:
        text="very good";
        break;

        case 0:
        text="very good";
         break;

    default:
        text = "no";
        break;
}
console.log(text);



