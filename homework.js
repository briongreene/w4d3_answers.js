// Easy Going
// Write a for loop that will log the numbers 1 through 20.

for(let e = 1; e <=20; e++) {
    console.log(e)
}

// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

// Hint: Think about the increment expression.

for(let g = 0; g <=200; g+= 2) {
    console.log(g)
}

// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for(let f = 1; f <=100; f++) {
    if (f % 3 === 0) {
        console.log('Fizz');
    }
    else if (f % 5 === 0) {
        console.log('Buzz'); 
    }
    else if (f % 3 === 0 && f % 5 === 0) {
        console.log('FizzBuzz');
    }
    else {
        console.log(f);
    }
}

// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

let name = ['Wolfy', 'Sharky', 'Plantee','Porgee',"D'Art"];
let species = ['wolf', 'shark', 'plant', 'Porg', 'Demogorgan Dog'];
let age = ['16', '20', '5000', '186', '2'];
let hometown = ['Yukon Territory', 'Left Coast', 'Mordor', 'Ahch-To', 'Upside Down'];

// console.log(name);
// console.log(species);
// console.log(age);
// console.log(hometown);

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee.splice(2, 1, '5001')
console.log(plantee)
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

wolfy.splice(3, 1, 'Gotham City')
console.log(wolfy)
// Give D'Art a second hometown by adding "Hawkins"

dart.push('Hawkins')
console.log(dart)
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy.splice(0, 1, 'Gameboy')
console.log(wolfy)

