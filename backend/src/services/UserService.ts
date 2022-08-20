import IModel from '../models/interfaces/Model';
import { UserCreated, UserType, UserTypeModel } from '../types/Model';
import { UserTypeService } from '../types/Service';
import IService from './interfaces/Service';
import Jasonwebtoken from '../utils/Jasonwebtoken';
import IJasonwebtoken from '../utils/interfaces/IJasonwebtoken';

export default class UserService implements IService<UserTypeService> {
  private _model: IModel<UserTypeModel>;

  private jasonwebtoken: IJasonwebtoken;

  constructor(model: IModel<UserTypeModel>) {
    this._model = model;
    this.jasonwebtoken = new Jasonwebtoken();
  }

  public async create(entity: UserType): Promise<UserTypeService> {
    const user = await this._model.create(entity);

    if (!user) return { message: 'User already exists' };

    const token = this.jasonwebtoken.sign(user as UserCreated);

    return {
      user,
      token,
    } as UserTypeService;
  }
}
