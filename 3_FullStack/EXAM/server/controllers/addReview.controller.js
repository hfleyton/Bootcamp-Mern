
const { model : MoviesModel } = require('../models/Movies.model');
const { model : ReviewsModel } = require('../models/Reviews.model');

const addReview = async (req, res) => {
    try {
        console.log(req.body);
        const { title, reviews } = req.body;
        try{
            console.log(title);
            const { _id } = await MoviesModel.findOne({ title : {$in : title} })
            console.log(_id)
            await MoviesModel.findByIdAndUpdate(
                { _id: _id },
                { $push: {reviews} });
            await reviews.save();

            const response = { status : 'OK', mensaje : "Review agregado correctamente"}
            res.status(200).json(response)
            
        }catch (err){
            //res.status(200).json({status : 'ERROR',mensaje : "La Pelicula no existe"})
            res.status(500).json(err);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};



module.exports = addReview;