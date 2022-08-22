import { NextFunction, Request, Response } from 'express';

export default interface IController<T> {
  route: string;
  create(req: Request<T>, res: Response<T>, next: NextFunction): Promise<Response<T> | void>;

  // readAll(req: Request, res: Response<T[]>, next: NextFunction): Promise<Response | void>;

  // readOne(req: Request<{ id: string }>, res: Response<T>, next: NextFunction): Promise<Response | void>;

  // update(req: Request<{ id: string } & T>, res: Response<T>, next: NextFunction): Promise<Response | void>;

  // delete(req: Request<{ id: string }>, res: Response<T>, next: NextFunction): Promise<Response | void>;
}
