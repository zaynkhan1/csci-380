// Fizzbuzz

// function
function fizzbuzz() {
  // loop from 0-100
  for (let number = 0; number <= 100; number++) {
    // check if divisible by 3 & 5
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('fizzbuzz');
    }
    // check if divisible by 3
    else if (number % 5 === 0) {
      console.log('buzz');
    }
    // check if divisible by 5
    else if (number % 3 === 0) {
      console.log('fizz');
    }
    // print if all conditions fail
    else {
      console.log(number);
    }
  }
}

// calling the function
fizzbuzz();
