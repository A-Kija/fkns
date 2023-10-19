const house = {
    rooms: ['livingRoom', 'bedroom', 'bathroom', 'kitchen', 'basement'],
    sharedEntrance: false,
    window: 8,
    garden: true,
    garage: false,
    kitchen: true,
    livingRoom: true,
    bathroom: 2,
    bedroom: 3,
};

// console.log(house.rooms.slice()); // copy

house.rooms.push('attic');

// console.log(house.rooms); // reference


house.basement = true;
delete house.garage;
house.window = 9;
house.window++;

// const house2 = {...house}; // shallow copy

// deep copy
// const house2 = JSON.parse(JSON.stringify(house));
const house2 = structuredClone(house);

house2.bathroom = 15;


house2.rooms.push('attic2');


// console.log(house);
// console.log(house2);


const animal = [
    'dog',
    'black',
];

// ... spread operator     type: 'dog', color: 'black' 

const animal2 = [...animal];

// console.log(animal2);

function fun(a, b) {
    // console.log(a, b);
}

fun(animal[0], animal[1]);
fun(...animal);


const animal3 = {
    type: 'dog',
    color: 'black',
    tail: true,
    legs: 4,

};

const animal4 = {...animal3, color: 'white', color2: 'brown'};

// console.log(animal4);

const box = ['bolt', ['screw'], 'nail', 'washer', 'nut'];

const [one, two, ...other] = box;
//is the same as
// const one = box[0];
// const two = box[1];

// console.log(one, two, other);

two.push('screwdriver');

// console.log(box);


const bag = {
    first: 'book',
    second: 'pen',
    third: 'pencil',
    fourth: 'notebook',
};

const { fourth, second } = bag;

// console.log(fourth, second);


const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        year: 2005,
        color: 'blue',
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2015,
        color: 'red',
    },
    {
        brand: 'Fiat',
        model: '500',
        year: 2010,
        color: 'orange',
    },
    {
        brand: 'Ford',
        model: 'Focus',
        year: 2005,
        color: 'red',
    },
    {
        brand: 'Opel',
        model: 'Corsa',
        year: 2015,
        color: 'black',
    }
];

const A = false;

let B;

// if (A === true) {
//     B = 'A is true';
// } else {
//     B = 'A is false';
// }

// B = (A === true) ? 'A is true' : 'A is false';

// console.log(B);







const paintWhiteAllFords = cars.map(car => car.brand === 'Ford' ? {...car, color: 'white'} : car);
    
const carsWithMotors = cars.map(car => ({...car, motor: 'V8'}));

const noOpels = cars.filter(car => car.brand !== 'Opel');


const all = cars
.map(car => car.brand === 'Ford' ? {...car, color: 'white'} : car)
.map(car => car.brand === 'Fiat' ? {...car, color: 'skyblue'} : car)
.map(car => ({...car, motor: 'V8'}))
.filter(car => car.brand !== 'Opel');

console.log(cars);
console.log(all);

cars.sort((a, b) => a.year - b.year);

//sort by model
cars.sort((a, b) => b.model.localeCompare(a.model));


    

