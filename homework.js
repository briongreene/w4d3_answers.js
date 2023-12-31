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

// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

let ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (let elements of ninja) {
    console.log(elements.toUpperCase())
}


const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'))

// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// use the .sortmethod Thought question: what did this do to the array? //alphabetic order  Did it permanently alter it? it appears to alter it

favMovies.sort();
console.log(favMovies)
// Use the method pop
favMovies.pop()
console.log(favMovies)  //removed volver from end
// push"Guardians of the Galaxy"
favMovies.push('Lord of the Rings')
console.log(favMovies)
// Reverse the array
favMovies.reverse()
console.log(favMovies)
// // Use the shiftmethod
favMovies.shift()
console.log(favMovies)
// unshift- what does it return?  //returns nothing
favMovies.unshift()
console.log(favMovies)
// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
console.log(favMovies.indexOf('Django Unchained'))
favMovies.splice(14, 1, 'Avatar')
console.log(favMovies)
// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array? yes
let half = Math.ceil(favMovies.length / 2);
let takeHalf = favMovies.slice(half)
console.log(takeHalf)
// store the value of your slice in a variable, console.log it - Thought question: what is going on here? //movies returned using slice 
let slicedArray = favMovies.slice(0, 9);
console.log(slicedArray)
// console.log your final results

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array? Last known Index location
console.log(favMovies.indexOf('Fast and Furious'))
// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let? good question, tell me later!

// Where is Waldo
// With the following multi-dimensional array
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo)
// Change "Neff" to "No One"
whereIsWaldo[1][2] = 'No One'  //no splice or slice in multi-dimensional array  row [1] column [2] = 'No one'
 console.log(whereIsWaldo)
// Access and console.log "Waldo"
whereIsWaldo[2][2] = 'Waldo'
console.log(whereIsWaldo[2][2])

// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// let text = "Love me, pet me! HSSSSSS!"
let num = 20
for (k = 0; k <= num; k++){
              if(k % 2 == 0){
            console.log(k +  "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away...")
          } 
    console.log(k)}


// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// Hint 1
// Hint 2
// Hint 3
// Hint 4
// Hint 5
// Hint 6
// Image of cat with funny quote about dot

// Find the Median
// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
//Google search math.floor complicated; will research again later
// Define a function that takes an array of numbers as a parameter
function findMedian(nums) {
    // Sort the array in ascending order using Array.sort()
    nums.sort((a, b) => a - b);
  
    // Get the number of elements in the array using Array.length
    let n = nums.length;
  
    // Get the middle index of the array using Math.floor()
    let mid = Math.floor(n / 2);
  
    // Check if the array length is odd or even
    if (n % 2 === 0) {
      // If even, return the average of the two middle elements
      return (nums[mid - 1] + nums[mid]) / 2;
    } else {
      // If odd, return the element at the middle index
      return nums[mid];
    }
  }
  
  // Declare an array of numbers
  let nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
  
  // Call the function and store its result in a variable
  let median = findMedian(nums);
  
  // Use console.log() to print the result
  console.log(median);
  

