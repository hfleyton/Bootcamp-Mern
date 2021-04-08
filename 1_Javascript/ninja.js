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
        const{nombre, salud, fuerza, velocidad} = this;
        return{
            nombre,
            salud,
            fuerza,
            velocidad
        };
    }
    drinkSake(){
        this.salud += 10;
    }
}

module.exports  = Ninja;


/* const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats(); */