setTimeout(() => {console.log("Task #5")}, 0);

function repeatOperation(operation, interval, times) {
    if(typeof operation !== "function" || times < 1 || interval < 0) {
        return;
    }

    let counter = 0;
    //Call operation, increase counter, check if operation has been comleted the specified amount of times
    let intervalId = setInterval(() => {
        operation();
        if(times === ++counter) {
            clearInterval(intervalId);
        }
    }, interval);
}

repeatOperation(()=>{console.log("Lambda function")}, 400, 4);