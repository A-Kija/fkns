class Kibiras1 {


    // on keyword new this function will be called
    constructor(number) {
        this.number = number;
        this.akmenuKiekis = 0;
    }

    pridetiAkmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log(`Akmenų kiekis kibire Nr.:${this.number}: ${this.akmenuKiekis}`);
    }


}


const kibiras1 = new Kibiras1(1);
const kibiras2 = new Kibiras1(2);
const kibiras3 = new Kibiras1(3);

kibiras2.pridetiAkmeni();
kibiras2.pridetiAkmeni();
kibiras2.pridetiAkmeni();
kibiras3.pridetiAkmeni();

kibiras1.pridetiDaugAkmenu(10);

kibiras1.kiekPririnktaAkmenu();
kibiras2.kiekPririnktaAkmenu();
kibiras3.kiekPririnktaAkmenu();
