const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() === 8) {
        resolve("Bien, hoy es Lunes");
    } else {
        reject("Es otro dia de la semana");
    }
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );