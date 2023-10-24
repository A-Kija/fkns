
class Racoon {

    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am a racoon!`);
    }

    eat(food) {
        console.log(`Yum, I love eating ${food}!`);
    }

    count(a, b) {
        console.log(a + b);
    }

    growOlder(years) {
        this.age += years;
        // console.log(`I am now ${this.age} years old!`);
    }



}

// const racoonSimple = {};

const racoon = new Racoon('Racoon', 2, 'brown');
const racoon2 = new Racoon('Racoon2', 3, 'black');

// console.log(racoonSimple);
// console.log(racoon);
// console.log([]);

// racoon.eat('fish');
// racoon.count(2, 3);

// racoon2.eat('meat');

racoon.growOlder(10);

racoon.sayHello();
racoon2.sayHello();

console.log(racoon, racoon2);


