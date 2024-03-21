const { Router } = require('express');
const movieController = require('../controllers/movieController');
const validateMovie = require('../middlewares/validateMovie');

const movieRouter = Router();

movieRouter.get('/', movieController.getAllMovies);
movieRouter.post('/', validateMovie, movieController.createMovie);
movieRouter.get('/:id', movieController.getMovieById);
movieRouter.put('/:id', movieController.updateMovie);
movieRouter.delete('/:id', movieController.deleteMovie);
movieRouter.get('/title/:title', movieController.getMovieByTitle);

module.exports = movieRouter;