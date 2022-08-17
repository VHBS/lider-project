import IModel from '../models/interfaces/Model';
import { UserType, UserTypeModel } from '../types/Model';
import { UserTypeService } from '../types/Service';
import IService from './interfaces/Service';

export default class UserService implements IService<UserTypeService> {
  private model: IModel<UserTypeModel>;

  constructor(model: IModel<UserTypeModel>) {
    this.model = model;
  }

  public async create(entity: UserType): Promise<UserTypeService> {
    const user = await this.model.create(entity);

    if (!user) return { message: 'User already exists' };

    return {
      user,
      token: 'teste',
    } as UserTypeService;
  }
}
