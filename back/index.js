// Requerir el objeto app desde server.js
const app = require('./src/server');

// Definir el puerto en el que escuchará la aplicación
const port = 3000;

// Hacer que la aplicación escuche en el puerto especificado
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});