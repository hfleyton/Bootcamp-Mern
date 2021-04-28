function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    
    while(headsCount < 5) {
        if(attempts < 100){
            attempts++;
            let result = tossCoin();            
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        } else {
            reject(`Ha superado el limite de ${attempts} intentos`);
            break
        }
    }
    resolve(`Le tomo ${attempts} intentos obtener 5 caras`);
    });
}

/* fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.error(err) );

console.log("Promesa ejecutandose") */

(async() => {
    try {
        const resultado = await fiveHeads();
        console.log(resultado);
        console.log("Termino app")
    }catch (e) {
        console.log("Catch")
        console.log(e);
    }
})();

console.log("Promesa ejecutandose")