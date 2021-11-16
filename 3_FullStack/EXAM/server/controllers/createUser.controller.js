const { model : UserModel} = require('../models/User.model');

const createuser = async ( req, res) =>{
    try{
        console.log(req.body);
        const { email , firstName, lastName , password } = req.body

        const user = new UserModel( { email , firstName, lastName , password } );
        await user.save();

        const response = { status : 'OK', mensaje: "Usuario creado correctamente"}
        res.status(200).json(response)

    }catch (err) {
        console.error(err.errors);
        res.status(500).json(err);
    }
}

module.exports = createuser;