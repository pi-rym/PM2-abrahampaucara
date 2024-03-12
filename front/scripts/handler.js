const renderFilms = require('./renderFilms');
const axios = require('axios');

// const getFilms = () => {
//     $.get('https://students-api.2.us-1.fl0.io/movies', (data) => data.forEach(renderFilms));   
// }

const getFilms = async() =>  {
    try {
        const response = await axios.get('https://students-api.2.us-1.fl0.io/movies');
        const data = response.data;
        data.forEach(renderFilms);
    }catch(error){
        console.log(error);
    }
}

// const getFilms = axios.get('https://students-api.2.us-1.fl0.io/movies');
// getFilms.then((response) => {
//     const data = response.data;
//     data.forEach(renderFilms);
// }).catch((error) => {
//     console.log(error);
// });

module.exports = getFilms;