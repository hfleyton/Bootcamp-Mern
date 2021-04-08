class Ninja{
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(this.nombre)
    }
    showStats(){
        const{salud, fuerza, velocidad} = this;
        return{
            salud,
            fuerza,
            velocidad
        };
    }
    drinkSake(){
        this.salud += 10;
    }
}


class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud += 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;   
    }
    speakWisdom(){
        const message = super.drinkSake();
        console.log("ejecute speakWisdom")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
console.log(superSensei.showStats());
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"