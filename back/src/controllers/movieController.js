const movieServices = require('../services/movieServices');

module.exports = {
    getAllMovies: async (req, res) => {
        //res.status(200).send('Se realizó la petición, próximamente estarán disponibles los datos de películas.');
        try {
            const movies = await movieServices.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
        
    },

    createMovie: async (req, res) => {
        try {
            const movie = await movieServices.postMovie(req.body);
            res.status(201).json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getMovieById: async (req, res) => {
        try {
            const movie = await movieServices.getMovieById(req.params.id);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateMovie: async (req, res) => {
        try {
            const movie = await movieServices.updateMovie(req.params.id, req.body);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteMovie: async (req, res) => {
        try {
            const movie = await movieServices.deleteMovie(req.params.id);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getMovieByTitle: async (req, res) => {
        try {
            const movie = await movieServices.getMovieByTitle(req.params.title);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}