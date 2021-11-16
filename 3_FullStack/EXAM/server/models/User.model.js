const { Schema, model } = require ('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new Schema ({
    email: {
        type : String,
        required: [true, 'Email es requerido'],
        unique : true
    },
    firstName : {
        type : String,
        required: [true, 'FirstName es requerido'],
    },
    lastName : {
        type : String,
        required: [true, 'LastName es requerido'],
    },
    password : {
        type : String,
        required: [true, 'Password es requerido'],
        minlength: [4, 'Password debe tener al menos 4 caracteres'],
    }
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

UserSchema.plugin(uniqueValidator,{ message: 'Usuario registrado anteriormente' });
const User = model('user', UserSchema);

module.exports = { 
    schema : UserSchema,
    model : User
}

