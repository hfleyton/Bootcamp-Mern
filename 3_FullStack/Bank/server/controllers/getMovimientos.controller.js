const { model : UserModel} = require('../models/User.model');

const getMovimientos = async (req, res) => {
    try{
        console.log(req.body);
        const { rut } = req.body;
        const { saldo , movimientos, fullName } = await UserModel.findOne({ rut : {$in : rut}})
        const ultimosMovimientos = movimientos.slice(Math.max(movimientos.length - 10, 0))
        ultimosMovimientos.reverse();
        const response = { status : 'OK', fullName , saldo , ultimosMovimientos}
        res.status(200).json(response)

    }catch (err) {

        console.error(err);
        res.status(500).json(err);

    }
}

module.exports = getMovimientos;