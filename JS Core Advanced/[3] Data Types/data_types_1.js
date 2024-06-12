console.log("Task #3");

function hasEqualFields(firstObject, secondObject) {
    for(let key in firstObject) {
        if((key in secondObject) && firstObject[key] === secondObject[key]) {
            return true;
        }
    }
    return false;
}

let firstObject = {
    id: 101,
    name: "John"
};
let equalObject = {
    id: 101,
    name: "John"
}
let differentObject = {
    id: 56,
    login: "peter"
}
let almostEqualObject = {
    id: 101,
    login: "peter"
}

console.log(hasEqualFields(firstObject, equalObject), 
            hasEqualFields(firstObject, differentObject), 
            hasEqualFields(firstObject, almostEqualObject));