import App from './app';
import UserController from './controllers/UserController';
import { PORT } from './env';
import CustomRouter from './routes';

const port = PORT || 3001;

const server = new App();

// Controllers Instances
const userController = new UserController();

// Routes Instances
const userRouter = new CustomRouter();

userRouter.addRoute(userController);

server.addRouter(userRouter.router);

server.start(port);
