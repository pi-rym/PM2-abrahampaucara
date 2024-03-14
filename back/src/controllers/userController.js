module.exports = {
    getAllUsers: (req, res) => {
        res.status(200).send('ENDPOINT: /users')
    }
}