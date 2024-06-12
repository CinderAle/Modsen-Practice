'use strict'
function factorial(number) {
    if(typeof number !== 'number' || number < 0) {
        throw new Error('Provided value is negative or not a number!');
    }

    return number == 0 ? 1 : number * factorial(number - 1);
}

console.log("Task #1", factorial(7));