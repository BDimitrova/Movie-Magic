const mongoose = require('mongoose');

let moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
    },
    genre: {
        type: String,
        required: true,
        minLength: 3,
    },
    director: {
        type: String,
        required: true,
        minLength: 3,
    },
    year: {
        type: Number,
        required: true,
    },
    moviePoster: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 500,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    voted: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],

});

moviesSchema.method('getVoted', function () {
    return this.voted.map(x => x._id);
})

let Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;