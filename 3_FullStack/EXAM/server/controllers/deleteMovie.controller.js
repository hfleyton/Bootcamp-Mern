const { model : MoviesModel} = require('../models/Movies.model');

const deleteMovie = async (req, res) => {
    try{
        console.log(req.body);
        const { title } = req.body;
        const resp = await MoviesModel.deleteOne({ title : {$in : title}})
        console.log(resp)

        const response = { status : 'OK', mensaje : `La pelicula ${title} fue eliminada exitosamente`}
        res.status(200).json(response)

    }catch (err) {

        console.error(err);
        res.status(500).json(err);

    }
}

module.exports = deleteMovie;