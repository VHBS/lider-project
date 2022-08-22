import App from './app';
import { PORT } from './env';
import userController from './factories/UserFactory';
import CustomRouter from './routes';
import { UserTypeService } from './types/Service';

const port = PORT || 3001;

const server = new App();

// Routes Instances
const userRouter = new CustomRouter<UserTypeService>();
userRouter.addRoute(userController);

server.addRouter(userRouter.router);

server.start(port);
