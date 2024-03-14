module.exports = {
    getAllPosts: (req, res) => {
        res.status(200).send('ENDPOINT: /posts')
    }
}