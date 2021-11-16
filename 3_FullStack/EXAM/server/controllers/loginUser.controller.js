const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { model : UserModel} = require('../models/User.model');

const loginUser = async ( req, res) =>{
    const { email:inputEmail , password:inputPassword } = req.body
    try{
        console.log(req.body);
        try{
            const { email, password, _id , firstName, lastName } = await UserModel.findOne({ email : {$in : inputEmail}})
            const payload = { id: _id };
            const userToken = jwt.sign(payload, process.env.SECRETKEY);  
            const match = await bcrypt.compare(inputPassword, password);
            if(match){
                res.cookie("usertoken", userToken, process.env.SECRETKEY, {
                    httpOnly: true,
                })
                const response = { status : 'OK', mensaje: "usuario logeado correctamente", email, firstName, lastName}
                res.status(200).json(response)
            }else{
                res.status(200).json({status : 'ERROR', mensaje : "Contraseña incorrecta, intente nuevamente"})
            }
        }catch (err) {
            res.status(200).json({status : 'ERROR', mensaje : "Usuario no registrado, intente nuevamente"})
        }
    }catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

module.exports = loginUser;

