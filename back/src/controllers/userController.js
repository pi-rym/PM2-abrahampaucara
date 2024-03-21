const usersService = require('../services/usersService');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await usersService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
        
    },

    createUser: async (req, res) => {
        const { name } = req.body;
        try {
            await usersService.createUser(name);
            res.status(201).send('Usuario creado');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}