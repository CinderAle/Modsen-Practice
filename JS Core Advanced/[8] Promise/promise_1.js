new Promise(()=>{console.log("Task #8")});

function executeSequence(...sequence) {
    sequence.forEach((operation) => {
        new Promise(operation);
    })
}

let firstTask = () => {console.log("first")};
let secondTask = () => {console.log("second")};
let thirdTask = () => {console.log("third")};

executeSequence(firstTask, secondTask, thirdTask);