const renderFilms = require('./renderFilms');
const axios = require('axios');

const getFilms = async() =>  {
    try {
        const response = await axios.get('http://localhost:3000/movies');
        const { data } = response;
        data.forEach(renderFilms);
    }catch(error){
        console.log(error);
    }
}

const postMovie = async (newMovie) => {
    try {
    const response = await axios.post("http://localhost:3000/movies", newMovie);
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getFilms,
    postMovie
};