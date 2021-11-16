const { model : UserModel} = require('../models/User.model');
const { model : MoviesModel} = require('../models/Movies.model');
const { model : ReviewsModel} = require('../models/Reviews.model');

const getReviews = async (req, res) => {
    try{
        console.log(req.body);
        const { title } = req.body;
        const { reviews } = await MoviesModel.findOne({ title : {$in : title}})
        console.log(reviews)

        const response = { status : 'OK', reviews}
        res.status(200).json(response)

    }catch (err) {

        console.error(err);
        res.status(500).json(err);

    }
}

module.exports = getReviews;