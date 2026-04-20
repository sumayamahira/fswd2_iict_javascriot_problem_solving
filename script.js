// task-1-Write a function to convert temperature from Celsius to Fahrenheit.

function temperature(celsius){
    let fahrenheit = (celsius*1.8) + 32;
    return fahrenheit;
}

let value = parseInt(prompt("Please enter a valid number. e.g. 10 : "));

let calculation = temperature(value);
console.log(`Now the temperature is ${calculation}(°F)`);



