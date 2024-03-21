const validateMovie = (req, res, next) => {
    const { title, director, year, duration, rate, genre, poster } = req.body;

    
    if (year.toString().length !== 4) {
      return res.status(400).json({ error: 'El año debe ser un número de 4 dígitos' });
    }


    if (
      !title ||
      !director ||
      !year ||
      !duration ||
      !rate ||
      !genre ||
      !poster
    ) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    } else {
      next();
    }
  };
  
  module.exports = validateMovie; 