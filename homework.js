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