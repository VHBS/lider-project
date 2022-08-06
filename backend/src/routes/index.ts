import { Router } from 'express';
import IController from '../controllers/interfaces/Controller';

export default class CustomRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();

    this.addRoute = this.addRoute.bind(this);
  }

  public addRoute(controller: IController<T>, route: string = controller.route) {
    console.log(route);
    // controller.create
    this.router.get(route, controller.create);
    // this.router.get(route, controller.read);
    // this.router.get(`${route}/:id`, controller.readOne);
    // this.router.put(`${route}/:id`, controller.update);
    // this.router.delete(`${route}/:id`, controller.delete);
  }
}
