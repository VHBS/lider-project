import { Request, Response, NextFunction } from 'express';
import IController from './interfaces/Controller';
import { UserTypeService, UserCreate } from '../types/Service';
import IService from '../services/interfaces/Service';

export default class UserController implements IController<UserTypeService> {
  public route: string;

  private _service: IService<UserTypeService>;

  constructor(service: IService<UserTypeService>) {
    this.route = '/user';
    this._service = service;

    this.create = this.create.bind(this);
  }

  public async create(
    req: Request<UserCreate>,
    res: Response<UserTypeService>,
    next: NextFunction,
  ): Promise<Response<UserTypeService> | void> {
    try {
      const { firstName, lastName, email, password, cpf } = req.body;
      const result = await this._service.create({ firstName, lastName, email, password, cpf });
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  }

  // readAll(req: Request, res: Response<T[]>, next: NextFunction): Promise<Response | void>;

  // readOne(req: Request<{ id: string }>, res: Response<T>, next: NextFunction): Promise<Response | void>;

  // update(req: Request<{ id: string } & T>, res: Response<T>, next: NextFunction): Promise<Response | void>;

  // delete(req: Request<{ id: string }>, res: Response<T>, next: NextFunction): Promise<Response | void>;
}
