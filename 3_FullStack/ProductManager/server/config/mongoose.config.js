const mongoose = require("mongoose");

const urlDataBase = 'mongodb+srv://admin:1234@cluster0.zo6wk.mongodb.net/productManager?retryWrites=true&w=majority';

const connectMongo = async () =>{
	try{
		await mongoose.connect(urlDataBase,{
			useNewUrlParser : true,
			useUnifiedTopology : true,
			useCreateIndex : true,
			useFindAndModify : false
		})
		console.log("Conexion exitosa a mongoDB")
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
}

module.exports = connectMongo;