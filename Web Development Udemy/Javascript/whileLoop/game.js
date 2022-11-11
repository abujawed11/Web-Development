
// let number = Math.floor(Math.random() * 100) +1;


// let guess = prompt("Guess a number:");
// while(!parseInt(guess)){
//     guess = prompt("Enter a Valid number:");
// }
// let count = 0;

// while(true){
//     if(guess < number){
//         console.log(`Your gess is ${guess} which is LOW!!`);
//         count++;
//         guess = prompt(`Your gess is ${guess} which is LOW!!`);
//     }
//     else if(guess > number){
//         console.log(`Your gess is ${guess} which is High!!`);
//         count++;
//         guess = prompt(`Your gess is ${guess} which is High!!`);
//     }
//     else{
//         console.log("You guess it right!!");
//         alert("You guess it right!!");
//         console.log(`The number was ${number} and total guess was ${count}`);
//         break;
//     }
// }

const numbers = [1,2,3,4,5,6,7,8,9];

for(let sqr of numbers){
    console.log(sqr * sqr);
}