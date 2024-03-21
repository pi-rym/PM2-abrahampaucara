const Movie = require('../models/Movie');

class MovieService {
  constructor({ title, poster, director, year, duration, genre, rate }) {
    if (!title || !poster || !director) {
      throw new Error('Todos los campos son necesarios.');
    }

    this.title = title;
    this.poster = poster;
    this.director = director;
    this.year = year;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
  }
}

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies.map(movie => new MovieService(movie));
  },

  postMovie: async (movieData) => {
    const newMovie = new Movie(movieData);
    return await newMovie.save();
  },

  deleteMovie: async (id) => {
    return await Movie.findByIdAndDelete(id);
  },

  
  updateMovie: async (id, movieData) => {
    return await Movie  
      .findByIdAndUpdate(id, movieData
      );
  },

  getMovie: async (id) => {  
    return await Movie.findById(id);
  },
  
  getMovie: async (title) => {
    return await Movie.findOne({title});
  }

};
