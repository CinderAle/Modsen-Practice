const API = "https://reqres.in/api/users";

console.log("Task #9")

async function fetchData() {
    let info;
    await fetch(API).then(result => info = result.json()).then(data => {info = data.data});
    return info;
}

fetchData().then((data) => console.log(data));