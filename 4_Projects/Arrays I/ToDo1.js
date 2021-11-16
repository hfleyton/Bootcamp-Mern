//Push al frente
const pushAlFrente = (arr, val) => {
    return [val, ...arr]
}

const arrayTest = [1,2,3,4]
const newArray1 = pushAlFrente(arrayTest,69)

console.log(newArray1)


//Pop al frente
const popAlFrente = (arr) => {
    const [primerValor, ...resto] = arr;
    return resto
}

const newArray2 = popAlFrente(arrayTest)
console.log(newArray2)


//Insertar en

const insertarEn = (arr, index, val) => {
    arr[index] = val
    return arr
}

const newArray3 = insertarEn(arrayTest,2,'insertado')
console.log(newArray3)

//Eliminar En

const eliminarEn = (arr, index) =>{
    const borrado = arr[index]
    const arrFinal = arr.pop(index)
    return borrado , arrFinal
}

console.log(arrayTest)
const newArray4 = eliminarEn(arrayTest,2)
console.log(newArray4)