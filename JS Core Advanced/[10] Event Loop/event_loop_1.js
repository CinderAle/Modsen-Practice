const DELAY = 2000;

console.log("Task #10");

function delayTask(task) {
    if(typeof task === "function") {
        setTimeout(task, DELAY);
    }

    throw new Error("Provided argument is not a function!");
}

delayTask(() => { console.log("Hello world!") });