// setTimeout(() => {
//     console.log("Hello!! after 2 sec");
// },2000)

// for(let i=0;i<10;i++){
//     setTimeout(() => {
//         console.log(`Hello!! ${i}`);
//     },2000)
// }

// const id = setInterval(() => {
//     console.log(Math.floor(Math.random()*10)+1)
// },2000);
let inc = 1;
const count = setInterval(() => {
    
    console.log(inc++);
    if(inc === 60){
        inc = 0;
    }
    // inc += 1;
},1000)

// clearInterval(count);