const { model : UserModel} = require('../models/User.model');

const updateAbonoRetiro = async (req, res) => {
    let ejecutarOperacion = false;
    try {
        console.log(req.body);
        let nuevoSaldo = 0;
        const { rut , movimiento } = req.body;
        let { operacion , monto } = movimiento;
        const { _id, saldo } = await UserModel.findOne({ rut : {$in : rut}})
        switch (operacion) {
            case "abono":
                nuevoSaldo = saldo + monto;
                ejecutarOperacion = true;
                break;
            case "retiro":
                if(saldo >= monto){
                    nuevoSaldo = saldo - monto;
                    ejecutarOperacion = true;
                }else{
                    res.status(200).json({status : 'ERROR',mensaje : "El retiro no es posible de realizar, no cuenta con el saldo suficiente"})
                }
                break;
            default:
                res.status(200).json({status : 'ERROR', mensaje : "Operacion no valida, solo puede seleccionar abono, retiro o transferencia"})
        }

        if(ejecutarOperacion){
            let movimientos = movimiento;
            movimientos.balance = nuevoSaldo;
            console.log(movimientos)
            await UserModel.findByIdAndUpdate(
                { _id: _id },
                { $push: { movimientos }, saldo : nuevoSaldo})
            const { saldo:saldoActual , movimientos:mov } = await UserModel.findOne({ rut : {$in : rut}})
            const ultimoMovimiento = mov[mov.length-1];
            const response = { status : 'OK', mensaje : `Su ${operacion} fue realizado exitosamente`, saldoActual , ultimoMovimiento}
            res.status(200).json(response)
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};



module.exports = updateAbonoRetiro;