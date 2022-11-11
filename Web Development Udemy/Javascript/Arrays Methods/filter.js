const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 9, 9, 9, 9, 9, 99, 9, 9, 999, 9, 9, 9, 9, 9, 99, 4, 5, 3, 3, 233, 332, 2, 1, 34]

const single = arr.filter((x) => {
    return x % 2 === 0
});


arr.some(x => x > 300);


// function count(array,num){
//     let i = 0;
//     arr.forEach((el,i,arr) => 
//     {
//         ar ===num ;
//     }
//     )
//     return i;
// }

// let occ = count(arr,8);
// console.log(occ);


// const test = arr.forEach((el,i,arr) => {
//     console.log(`${i}: element is ${el}`);
// })



function getOcc(req, num) {
    let count = 0;
    req.forEach((el) => {
        if (el === num) {
            count++;
        }
    })
    return count;
}

let getCount = getOcc(arr, 9);





function getOcc(req, num) {
    let count = 0;
    req.forEach((el) => {
        if (el === num) {
            count++;
        }
    })
    return count;
}


// function validUserNames(usernames) {
//     // your code here
//     const userArr = usernames.filter((x) => 
//          x.length < 10
//         // if(x.length < 10 ){
//         //     return x;
//         // }
//     )
//     return userArr;   
//   }


function validUserNames(usernames) {
    return usernames.filter(x => x.length < 10)
}

function allEvens(arr) {
    return arr.every(x => x % 2 === 0);
}

