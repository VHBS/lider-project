import UserController from '../controllers/UserController';
import UserModel from '../models/UserModel';
import User from '../sequelize/models/User';
import UserService from '../services/UserService';

const userModel = new UserModel(User);
const userService = new UserService(userModel);
const userController = new UserController(userService);

export default userController;
