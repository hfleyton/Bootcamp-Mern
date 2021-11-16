const { Schema, model } = require ('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const MovimientosModel = require('./Movimientos.model');
const bcrypt = require('bcrypt');

const UserSchema = new Schema ({
    rut: {
        type : String,
        required : true,
        unique : true
    },
    fullName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    saldo : {
        type : Number,
        default : 0
    },
    movimientos: [MovimientosModel.schema]
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

UserSchema.plugin(uniqueValidator);
const User = model('user', UserSchema);

module.exports = { 
    schema : UserSchema,
    model : User
}

