const { model : MoviesModel} = require('../models/Movies.model');

const createMovie = async (req, res) => {
    try {
        console.log(req.body);

        const { title , reviews } = req.body;
        const movies = new MoviesModel( { title , reviews } );
        await movies.save();

        const response = { status : 'OK', mensaje : `La pelicula ${title} fue agregada exitosamente`}
        res.status(200).json(response)

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};



module.exports = createMovie;