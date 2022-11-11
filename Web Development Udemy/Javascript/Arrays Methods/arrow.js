const newAdd = (x,y,z) => {  //Arrow Functions
    return x+y+z;
};

const oldAdd = function (x,y,z){  
    return x+y+z;
};

function add(x,y,z){
    return x+y+z;
}

const sqr = x => {
    return x*x;
}

const roll = () => {
    return Math.floor(Math.random()*6)+1;
}

const greet = (x) => {
    return `Hey ${x}`;
};

const add2 = (x,y) => x+y   //implicit return only works when only one expression is present

