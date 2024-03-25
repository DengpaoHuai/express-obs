const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  actors: {
    type: Array,
    required: true,
  },
});

const Movie = mongoose.model("Movie", moviesSchema);

export default Movie;
