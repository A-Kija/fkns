// rašo Antanas Šmaižys
class Grybas {

    constructor() {
        this.svoris = this.rand(5, 45);
        this.valgomas = !this.rand(0, 1);
        this.sukirmijes = !this.rand(0, 1);
    }

    rand = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

class Krepsys {
    constructor() {
        this.dydis = 500;
        this.grybuSvoris = 0;
        this.grybai = [];
    }

    pridetiGryba(grybas) {
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.grybai.push(grybas);
            this.grybuSvoris += grybas.svoris;
            return this.grybuSvoris < this.dydis;
        }
        return true;
    }
}

// rašo Janina Šmaižienė

const krepsys = new Krepsys();

// do {
//     const grybas = new Grybas();
//     if (krepsys.pridetiGryba(grybas)) {
//         console.log(grybas);
//     }
// } while (krepsys.grybuSvoris < krepsys.dydis);

do {} while (krepsys.pridetiGryba(new Grybas()));

console.log(krepsys);


// const g1 = new Grybas();
// const g2 = new Grybas();
// const g3 = new Grybas();

// console.log(g1, g2, g3);
