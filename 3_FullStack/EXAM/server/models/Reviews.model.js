const { Schema, model } = require ('mongoose');

const ReviewsSchema = new Schema({
    reviewerEmail: {
        type : String,
        required: [true, 'Reviewer es requerido'],
    },
    review : {
        type : String,
        required: [true, 'Review es requerido'],
        minlength: [5, 'Debe escribir un review'],
    },
    rating : {
        type : Number,
        required: [true, 'Rating es requerido'],
        default : 0
    }
});

const Reviews = model('reviews', ReviewsSchema);

module.exports = { 
    schema : ReviewsSchema,
    model : Reviews
}