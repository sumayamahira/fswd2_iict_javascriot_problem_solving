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

function largestWordCounter() {

    let userInput = prompt("Enter a string e.g. a full sentence: ").toLowerCase();
    let wordList = [];
    let word = ""

    for (let l of userInput) {

        if (l !== " ") {
            word += l;
        }
        else {
            wordList.push(word);
            word = ""
        }
    }

    wordList.push(word);

    let largestLength = 0;
    let largestWord = "";

    for (let w of wordList) {
        if (w.length > largestLength) {
            largestLength = w.length;
            largestWord = w;
        }
    }
    console.log(word);

    console.log(wordList)
    console.log(largestLength)
    console.log(largestWord)

}

largestWordCounter();
