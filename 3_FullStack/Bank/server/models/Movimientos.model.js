const { Schema, model } = require ('mongoose');

const MovimientosSchema = new Schema ({
    monto: {
        type : Number,
        required : true
    },
    operacion : {
        type : String,
        required : true
    },
    balance : {
        type : Number,
        default : 0
    }
});

const Movimientos = model('movimientos', MovimientosSchema);

module.exports = { 
    schema : MovimientosSchema,
    model : Movimientos
}