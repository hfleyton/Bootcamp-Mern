const { model : UserModel} = require('../models/User.model');
const { model : MoviesModel} = require('../models/Movies.model');


const getMovies = async (req, res) => {
    try{
        const allMovies = await MoviesModel.find()
        console.log(allMovies)

        const response = { status : 'OK', allMovies}
        res.status(200).json(response)

    }catch (err) {

        console.error(err);
        res.status(500).json(err);

    }
}

module.exports = getMovies;