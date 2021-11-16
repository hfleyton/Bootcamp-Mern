const { model : UserModel} = require('../models/User.model');

const updateAbonoRetiro = async (req, res) => {
    let ejecutarOperacion = false;
    try {
        console.log(req.body);
        let nuevoSaldoOrigen = 0;
        let nuevoSaldoDestino = 0;
        let nuevoBalance = 0;
        const { rutOrigen, rutDestino , movimiento: movimientoOrigen } = req.body;
        let { monto: montoOrigen } = movimientoOrigen;
        const { _id: _idOrigen, saldo: saldoOrigen } = await UserModel.findOne({ rut : {$in : rutOrigen}})
        try{
            const { _id: _idDestino, saldo: saldoDestino } = await UserModel.findOne({ rut : {$in : rutDestino}})

            if(saldoOrigen >= montoOrigen){
                nuevoSaldoOrigen = saldoOrigen - montoOrigen;
                nuevoSaldoDestino = saldoDestino + montoOrigen;
                ejecutarOperacion = true;
            }else{
                res.status(200).json({status : 'ERROR',mensaje : "La transferencia no es posible de realizar, no cuenta con el saldo suficiente"})
            }
            if(ejecutarOperacion){
                let movimientos = movimientoOrigen;
                movimientos.balance = nuevoSaldoOrigen;
                console.log(movimientos)
                await UserModel.findByIdAndUpdate(
                    { _id: _idOrigen },
                    { $push: { movimientos }, saldo : nuevoSaldoOrigen})
                const { saldo:saldoActual , movimientos:mov } = await UserModel.findOne({ rut : {$in : rutOrigen}})
                const ultimoMovimiento = mov[mov.length-1];

                movimientos.balance = nuevoSaldoDestino;
                console.log(movimientos)
                await UserModel.findByIdAndUpdate(
                    { _id: _idDestino },
                    { $push: { movimientos }, saldo : nuevoSaldoDestino})
                    
                const response = { status : 'OK', mensaje : "Transferencia realizada correctamente", saldoActual , ultimoMovimiento}
                res.status(200).json(response)
            }
        }catch (err){
            res.status(200).json({status : 'ERROR',mensaje : "El usuario a quien desea transferir no existe"})
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};



module.exports = updateAbonoRetiro;