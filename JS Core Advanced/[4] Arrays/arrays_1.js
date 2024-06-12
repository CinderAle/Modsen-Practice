function increase(array) {
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] === "number") {
            array[i] = array[i] * 1.1;
        }
    }
}

let array = [2, 3, 4, "John"];
console.log("Task #4", array);
increase(array);
console.log(array);