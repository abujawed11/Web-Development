function rant(message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());  
}

function repeat(str,numTimes){
    let res = "";
    for(let i=0;i<numTimes;i++){
        res = res + str;
    }
    console.log(res);
}


function isSnakeEyes(num1,num2){
    if(num1===1 && num2===1){
        console.log("Snake Eyes!");
    }else{
        console.log("Not Snake Eyes!");
    }

}

function lastElement(array){
    if(array.length !== 0){
        return array[array.length-1];
    }
    else{
        return null;
    }
}
//method:1
function capitalize(str){
    let sl = str[0].toUpperCase();
    let rem = "";
    for(let i=1;i<str.length;i++){
        rem += str[i];
    }
    return sl + rem;  
}
//method:2
function capitalize2(str){
    let sl = str.slice(0,1).toUpperCase();
    let rem = str.slice(1);
    return sl + rem;
    
}

function sumArray(arr){
    let sum=0;
    for(let a of arr){
        sum += a;
    }
    return sum;
}

// function returnDay(dayOfWeek){
//     switch (dayOfWeek) {
//         case 1:
//             return "Monday";
//             //break;
//         case 2:
//             return "Tuesday";
//             //break;
//         case 3:
//             return "Wednesday";
//             //break;
//         case 4:
//             return "Thursday";
//             //break;
//         case 5:
//             return "Friday";
//         case 6:
//             return "Saturday";
//         case 7:
//             return "Sunday";
//         default:
//             return null;
            
//     }
// }

function returnDay(dayOfWeek){
    const arr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunady'];
    if(dayOfWeek < 1 || dayOfWeek > 7)
    {
        return null;
    }
    else{
        return arr[dayOfWeek-1];
    }

}

const sqr = function(x){return x*x};

console.log(sqr(67));
