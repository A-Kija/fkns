// console.log('labas');


// const bla = function() {
//     console.log('bla');
// }

// const bla1 = function() {
//     console.log('ku ku');
// }

// const bla = () => {
//     console.log('bla');
// }

// const bla1 = () => {
//     console.log('bla');
// }

const bla = _ => {
    console.log('bla');
    return 5;
}

const bla1 = a => { // a is callback
    a();
}

// bla1(bla);

// console.log(bla); // function
// console.log(bla()); // function result

// array with animals
const animalsString = 'cat, dog, mouse, bird, fish';

const animals = ['cat', 'dog', 'mouse', 'bird', 'fish'];

// console.log(animalsString);
// console.log(animals.length);


// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// const printAnimal = animal => {
//     console.log(animal);
// }

// animals.forEach(printAnimal);    // callback function


// animals[15] = 'horse';

animals.push('horse');
animals.push('racoon');
animals.push('squirrel', 'rabbit', 'fox');

animals.unshift('elephant', 'lion');

animals[5] = 'Brigita';

animals.pop();

animals.shift();






// const box = animals.forEach(
//     (animal, i) => {
//         console.log(animal + ' is an animal number ' + i + ' in the array');
//     }
// );

const box = animals.map(
    (animal, i) => {
        console.log(animal + ' is an animal number ' + i + ' in the array');
        return animal.toLocaleUpperCase();
    }
);

const noBrigita = animals.filter(
    (animal, i) => {
        return (animal !== 'Brigita' && i !== 5);
    }
);

// const filterMap = animals.filter(
//     (animal, i) => {
//         return (animal !== 'dog');
//     }
// ).map(
//     (animal, i) => {
//         return animal.toLocaleUpperCase();
//     }
// );

// const filterMap = animals.filter(animal => animal !== 'dog').map(animal => animal.toLocaleUpperCase());

const filterMap = animals.map(animal => animal.toLocaleUpperCase()).filter(animal => animal !== 'DOG');



console.log(filterMap);
