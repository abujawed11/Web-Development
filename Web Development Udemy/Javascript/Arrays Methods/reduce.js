let minArr = [23,56,78,12,45,89,67,80,10,3,90,45,78,-34,-9,49,-12,0,-6,98,41,3,7];

let min = minArr.reduce((x,y) => {
    if(x<y){
        return x;
    }
    return y;
})

console.log(min);