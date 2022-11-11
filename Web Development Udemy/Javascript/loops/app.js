// for(i=1;i<10;i++){
//     console.log(i);
// }

// for(let i=1;i<=6;i++){
//     console.log("Da ba dee da ba daa");
// }

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

// for(let i=0;i<people.length;i++){
//     console.log(people[i].toUpperCase());
// }

// for(i in people){
//     console.log(people[i]);
// }

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for(let i=0;i<seatingChart.length;i++){
    for(let j=0;j<seatingChart[i].length;j++){
        console.log(seatingChart[i][j]);
    }
}