const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({

    id: {
        type: Number,
        unique: true
    },
    popularity: {
        type: Number
    },
    poster_path: {
        type: String
    },
    backdrop_path: {
        type: String
    },
    adult: {
        type: Boolean
    },
    title: {
        type: String
    },
    genre_ids: {
        type: [Number]
    },
    overview: {
        type: String
    },
    release_date: {
        type: Date
    },
    vote_average: {
        type: Number
    }
});

MovieSchema.methods.toJSON = function () {
    const movie = this.toObject();
    delete movie.__v;
    return movie;
};

const MovieModel = mongoose.model("movie", MovieSchema);
module.exports = MovieModel;
