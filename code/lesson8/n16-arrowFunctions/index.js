function hello(name, city) {
    console.log(`Hi I'm ${name} from ${city}`);
}

const hello2 = (name, city) => {
    console.log(`Hi I'm ${name} from ${city}`);
}

hello("Joe", "London");
hello2("Barbara", "Madrid");


// function sum2Numbers(a, b) {
//     const result = a + b;
//     return result;
// }

const sum2Numbers = (a, b) => a + b;


console.log(sum2Numbers(2, 2));

const arrayOfNumbers = [2, 4, 6,3, 2, 4, 2,6, 3, 2];

// const newArray = arrayOfNumbers.filter(function(number) {
//     return number > 3;
// });

const newArray = arrayOfNumbers.filter(number => number > 3);

console.log(newArray);