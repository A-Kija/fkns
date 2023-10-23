console.log('Hello World');

const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        year: '2005-10-15',
        color: 'blue',
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: '2007-02-15',
        color: 'red',
    },
    {
        brand: 'Fiat',
        model: '500',
        year: '2007-07-22',
        color: 'orange',
    },
    {
        brand: 'Ford',
        model: 'Focus',
        year: '2004-07-12',
        color: 'red',
    },
    {
        brand: 'Opel',
        model: 'Corsa',
        year: '2017-07-12',
        color: 'black',
    }
];

const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const arr2 = Array.from({ length: 200 }, _ => ['A', 'B', 'C', 'D'][rand(0, 3)]);


const letters = ['A', 'B', 'C', 'D'];
const arr3 = [];
for (let i = 0; i < 200; i++) {
    arr3.push(letters[rand(0, 3)]);
}

const a1 = [];
const a2 = [];
const a8 = [];

do {
    const digit = rand(100, 999);
    if (!a1.includes(digit)) {
        a1.push(digit);
    }
} while(a1.length < 100);


do {
    const digit = rand(100, 999);
    if (!a2.includes(digit)) {
        a2.push(digit);
    }
} while(a2.length < 100);


a1.forEach((el, i) => {
    a8[el] = a2[i];
});

// cars.sort((a, b) => new Date(b.year) - new Date(a.year));


// by model
cars.sort((a, b) => {
    if (a.brand > b.brand) {
        return 1;
    }
    if (a.brand < b.brand) {
        return -1;
    }
    return new Date(a.year) - new Date(b.year);
});

// by model with localeCompare
// cars.sort((a, b) => b.model.localeCompare(a.model));

// console.table(cars);

// const d = new Date();

// const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// console.log(date, Date.parse(d));

// const arr = new Array();
const set = new Set();

const obj = { a: 1 };
const bla = {...obj};

set.add(1);
set.add(2);
set.add(1);
set.add({ a: 1 });
set.add(obj);

// set.delete(2);

// set.clear();

// console.log(set.has(bla));

// console.log(set);

// console.log(set.size);



// const a1s = new Set();
// const a2s = new Set();
// const a8s = [];

// do {
//     a1s.add(rand(100, 999));
// } while(a1s.size < 100);


// do {
//     a2s.add(rand(100, 999));
// } while(a2s.size < 100);

// const a1a = [...a1s];
// const a2a = [...a2s];



// console.log(a1a, a2a);

const map = new Map();


map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

// function as key
map.set(function() {}, 4);
map.set(function() {}, 4);
map.set(function() {}, 4);

// object as key
map.set({}, 4);
map.set({a: 555, c: 777}, 4);
map.set({}, 4);


map.set('a', 555);


console.log(map);






