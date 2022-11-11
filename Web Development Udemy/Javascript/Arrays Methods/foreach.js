const arr = [1,2,3,5,6,7,8,9,10,11,13];

arr.forEach(function (num){
    console.log(num*num);
});

arr.forEach(function (num){  // foreach doesn't returns new array
    if(num%2==0){
        console.log(num);
    }
});

const arr2 = arr.map(function (n){
    return n;
});

const cubeArr = arr.map(function (n){   //map returns new array
    return n ** 3;
});


const fourPow = cubeArr.map(function (num){
    return num ** 4;
});

const newArr = fourPow.map(function (n){
    return n / (10**2);
});

//------------------

const movie = [
    {
        title: 'Raes',
        score: '95'
    },
    {
        title: 'Dhoom',
        score: 70
    },
    {
        title: '3 idiots',
        score: 90
    }

]

const movies = movie.map(function (mov){
    return mov;
});

const title = movie.map(function (tit){
    return tit.title.toUpperCase();
});

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function (name){
    return name.first;
})