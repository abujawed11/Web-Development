// function rollDie(){
//     let die = Math.floor(Math.random()*6)+1;
//     console.log(die);
// }

// function runMultilple(func,times){
//     for(let i=0;i<times;i++){
//         func();
//     }
//     // num();
//     // num();
// }


// //returning functions:

// function Add(x,y){
//     return function(x,y){
//         return console.log(x+y);
//     }
// }

// let res = Add();
// res(9,6);

// const square = {

//     area: function(side){
//         return side * side;
//     },
//     perimeter: function(side){
//         return 4*side;
//     }
// };

// console.log(square.area(8));
// console.log(square.perimeter(5));


// const thisCheck = {
//     n: "func",
//     work: "run",
//     check(){
//         console.log(`${this.work} has got me`);
//     }
// }

// const check2 = thisCheck.check;


const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(){
        this.eggCount += 1;
        return "EGG";
    }
};