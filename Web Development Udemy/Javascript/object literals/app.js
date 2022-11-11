const year = {
    1999: 'good',
    2000: 'Bad'
}

let birth = 1999;

console.log(year[birth]);

const person = {
    name: 'Abu',
    age: '25',
    doy: '1995'
}

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode;
console.log(fullAddress);
const person2 = person;

console.log(person === person2);
console.log(person.age +" "+ person.name);
console.log(person.name);

console.log(year[1999]);
console.log(year[2000]);