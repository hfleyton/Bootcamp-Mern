const mongoose = require("mongoose");

const urlDataBase = 'mongodb+srv://admin:1234@cluster0.zo6wk.mongodb.net/jokeAPI?retryWrites=true&w=majority';

/* mongoose.connect(urlDataBase, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));
 */

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
