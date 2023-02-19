const mongoose = require("mongoose");



// create a Schema for movie
const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    releaseYear: Number,

})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
