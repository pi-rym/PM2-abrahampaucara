const validateUser = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Nombre es requerido' });
  } else {
    next();
  }
};

module.exports = validateUser; 