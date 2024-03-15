const renderFilms = require('./renderFilms');
const axios = require('axios');

/* con async/await axios */
const getFilms = async() =>  {
    try {
        //const response = await axios.get('https://students-api.up.railway.app/movies');
        const response = await axios.get('http://localhost:3000/movies');
        
        const { data } = response;
        //const data = response.data;
        data.forEach(renderFilms);
    }catch(error){
        console.log(error);
    }
}

/* con Promesas */
// const getFilms = () => {
//     const getFilms = $.get('https://students-api.up.railway.app/movies');
//     getFilms.then((data) => data.forEach(renderFilms))
//     .catch((error) => console.log(error));
// }


module.exports = getFilms;