const faker = require('faker');
const crypto = require('crypto');

class Usuario {
    constructor(){
        this._id = crypto.randomBytes(18).toString('utf8'),
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.phoneNumber = faker.phone.phoneNumber(),
        this.mail = faker.internet.email(),
        this.password = faker.internet.password()
    }
}

module.exports = Usuario;