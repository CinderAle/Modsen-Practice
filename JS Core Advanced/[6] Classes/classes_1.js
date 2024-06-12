class Human {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    toString() {
        return `${this.name} ${this.age} years olf from ${this.country}`;
    }

    print() {
        console.log(this.toString());
    }
}

let Bob = new Human("Bob", 12, "Belarus");
let Jack = new Human("Jack", 54, "Turkey");
console.log("Task #6", Bob + " and " + Jack);
[Bob, Jack].forEach((e) => e.print());