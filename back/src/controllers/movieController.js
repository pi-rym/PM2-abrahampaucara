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
}