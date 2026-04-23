// task-1-Write a function to convert temperature from Celsius to Fahrenheit.

// function temperature(celsius){
//     let fahrenheit = (celsius*1.8) + 32;
//     return fahrenheit;
// }

// let value = parseInt(prompt("Please enter a valid number. e.g. 10 : "));

// let calculation = temperature(value);
// console.log(`Now the temperature is ${calculation}(°F)`);

// task-2-You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5], find: 5, output: 2
// sample-input: numbers = [5,6,11,12,98, 5], find: 25, output: 0

// const numbers = [5, 6, 11, 12, 98, 5, 6,6, 12, 10, 11, 23, 24, 45];
// let userInput = parseInt(prompt("Type a valid integer number: "))
// let similar = []

// for (let i of numbers){
//     if (i === userInput){
//         similar.push(userInput)
//     }

// }

// console.log(`The number is ${userInput} and it is ${similar.length} times in the array. `);


// task-3-Write a function to count the number of vowels in a string.

// function vowelCounter() {

//     let userInput = prompt("Enter a string e.g. Apple: ").toLowerCase();
//     const vowels = ["a", "e", "i", "o", "u"];
//     let counter = 0;

//     for (let w of userInput) {
//         if (vowels.includes(w)) {
//             counter++;
//         }
//     }

//     console.log(`Your given text is: ${userInput}.`)
//     console.log(`There is ${counter} vowels in your given text.`);
// }
// vowelCounter();


// task-4-Write a function to find the longest word in a given string.

// function largestWordFinder() {
//     const input = prompt("Enter a sentence: ").toLowerCase().trim();
//     const words = input.split(" ");

//     let longest = "";

//     for (const word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }

//     console.log(`The longest word in your given sentence is: ${longest}`);
// }

// largestWordFinder();


// task-5-Generate a random number between 10 to 20.

// const num = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// randomNumber = num[Math.floor(Math.random() * num.length)];
// console.log(randomNumber);


// task-6-Find the lowest number in the array below.

// const num = [167, 190, 120, 165, 137]

// let lowestNumber = num[0];
// for (i of num) {
//     if (i < lowestNumber) {
//         lowestNumber = i
//     }

// }

// console.log(lowestNumber);


// task-7-Find the friend with the smallest name.

const name = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallName = name[0];

for (const n of name) {
    if (n.length < smallName.length) {
        smallName = n;
    }
}

console.log(`The smallest name among friends is: ${smallName}`);
