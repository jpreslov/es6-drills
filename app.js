// function favMovie(name, movie){
//     console.log(`My name is ${name} and my favorite movie is ${movie}`)
// }

// favMovie('Brad', 'Project X')

let favMovie = (name, movie) =>
  console.log(`My name is ${name} and my favorite movie is ${movie}`);

// favMovie("Thomas", "Black Hawk Down");

let getFirstName = (fullName) => {
  let splitted = fullName.split(" ");
  console.log(splitted[0]);
};

// getFirstName('Bob Timmy Johnson')

let getFirstNameConcise = (fullName) => console.log(fullName.split(" ")[0]);

// getFirstNameConcise('Tom Timmy Tommerson Tone III, PhD.')

let doMath = (x, y) => {
  return (results = {
    exponent: x ** y,
    product: x * y,
  });

  // return (`Exponent: ${results.exponent}, product: ${results.product}`)
};

let newResults = doMath(5, 4);
// console.log(newResults)

let arr = ["Jake", "Birmingham", "pad thai"];

let myFunc = (name, location, favFood) => {
  console.log(`name: ${name}, loc: ${location}, food: ${favFood}`);
};

// myFunc(...arr)

let myName = "Thomason";

let myFunc2 = (str) => {
  let spreaded = [...str];
  console.log(spreaded);

  for (let i = 0; i < spreaded.length; i++) {
      console.log(spreaded[i])
  }
};

myFunc2(myName);
