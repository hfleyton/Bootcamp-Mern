const faker = require("faker");
const crypto = require('crypto');

class Empresa {
    constructor(){
        this._id = crypto.randomBytes(18).toString('utf8'),
        this.nombre = faker.company.companyName(),
        this.direccion = {
            calle : faker.address.streetName(),
            ciudad : faker.address.city(),
            estado : faker.address.state(),
            códigopostal : faker.address.zipCode(), 
            país : faker.address.country()
        }
        
    }
}

module.exports = Empresa;