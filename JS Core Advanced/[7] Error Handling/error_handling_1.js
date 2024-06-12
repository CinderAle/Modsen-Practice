console.log("Task #7");

function checkInteger(integer) {
    if(!Number.isInteger(integer)) {
        throw new Error("Provided value is not an integer value!");
    }

    return true;
}

console.log(checkInteger(42));
console.log(checkInteger(42.0002));