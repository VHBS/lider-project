import { Request, Response } from 'express';

export default class UserController {
  public menssagemTest: string;

  constructor() {
    this.menssagemTest = 'Funfando';
  }

  handle = async (_req: Request, res: Response): Promise<Response> => {
    console.log(this.menssagemTest)
    return res.status(200).json({ message: 'Funfando' });
  }
}
