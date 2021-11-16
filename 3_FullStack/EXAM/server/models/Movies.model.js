const { Schema, model } = require ('mongoose');
const ReviewsModel = require('./Reviews.model');

const MoviesSchema = new Schema ({
    title : {
        type : String,
        required: [true, 'Title es requerido'],
    },
    reviews : [ReviewsModel.schema]
});

const Movies = model('movies', MoviesSchema);

module.exports = { 
    schema : MoviesSchema,
    model : Movies
}