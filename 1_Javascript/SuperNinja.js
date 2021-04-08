const Ninja = require("./ninja");

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;   
    }
    speakWisdom(){
        super.drinkSake();
        console.log("ejecute speakWisdom")
    }
    showStats(){
        const {sabiduria} = this;
        return{...super.showStats(), sabiduria}
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
console.log(superSensei.showStats());
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"