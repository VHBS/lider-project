import bcrypr from 'bcryptjs';
import IModel from '../models/interfaces/Model';
import { UserCreated, UserType, UserTypeModel } from '../types/Model';
import { UserTypeService } from '../types/Service';
import IService from './interfaces/Service';
import Jasonwebtoken from '../utils/Jasonwebtoken';
import IJasonwebtoken from '../utils/interfaces/IJasonwebtoken';
import Nodemailer from '../utils/Nodemailer';

export default class UserService implements IService<UserTypeService> {
  private _model: IModel<UserTypeModel>;

  private jasonwebtoken: IJasonwebtoken;

  private nodemailer;

  constructor(model: IModel<UserTypeModel>) {
    this._model = model;
    this.jasonwebtoken = new Jasonwebtoken();
    this.nodemailer = new Nodemailer();
  }

  public async create(entity: UserType): Promise<UserTypeService> {
    const saltRounds = 10;
    const userToCreate = entity;
    userToCreate.password = await bcrypr.hash(entity.password, saltRounds);

    const user = await this._model.create(userToCreate);

    if (!user) return { message: 'User already exists' };

    const token = this.jasonwebtoken.sign(user as UserCreated);

    this.nodemailer.createAccount(userToCreate.email);

    return {
      user,
      token,
    } as UserTypeService;
  }
}
