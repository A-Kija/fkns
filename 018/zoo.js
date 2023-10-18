const animalsWithOwners = [
    { name: 'Fluffykins', owner: 'Harry' },
    { name: 'Racoon', owner: 'Lucy' },
    { name: 'Cat', owner: 'Casper' },
    { name: 'Dog', owner: 'Harry' },
];


window.addEventListener('load', _ => {
    renderAnimals();
});


const addRemoveEventListeners = _ => {
    document.querySelectorAll('button').forEach((button, i) => {
        button.addEventListener('click', _ => {
            animalsWithOwners.splice(i, 1);
            renderAnimals();
        });
    }
    );
}

const renderAnimals = _ => {
    const animals = document.querySelector('ul');
    animals.innerHTML = animalsWithOwners.map(animal => `
        <li>${animal.name} 
            <i>${animal.owner}</i>
            <button>Delete</button>
        </li>
        `).join('');
    addRemoveEventListeners();
}


