import { Request, Response, NextFunction } from 'express';
import IController from './interfaces/Controller';
import { UserType, UserCreate } from '../types/User';

export default class UserController implements IController<UserType> {
  public route: string;

  // _service: IService;
  constructor() {
    this.route = '/user';

    this.create = this.create.bind(this);
  }

  public create(_req: Request<UserCreate>, res: Response<UserType>, next: NextFunction): Response<UserType> | void {
    try {
      console.log(this.route);
      return res.status(200).json({ message: 'user route' });
    } catch (error) {
      return next(error);
    }
  }

  // readAll(req: Request, res: Response<T[]>, next: NextFunction): Promise<Response | void>;

  // readOne(req: Request<{ id: string }>, res: Response<T>, next: NextFunction): Promise<Response | void>;

  // update(req: Request<{ id: string } & T>, res: Response<T>, next: NextFunction): Promise<Response | void>;

  // delete(req: Request<{ id: string }>, res: Response<T>, next: NextFunction): Promise<Response | void>;
}
