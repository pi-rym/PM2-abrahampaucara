const { Router } = require('express');
const userController = require('../controllers/userController');
const valideUser = require('../middlewares/validateUser');

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', valideUser, userController.createUser);

module.exports = userRouter;