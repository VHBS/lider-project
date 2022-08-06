import { UserType } from '../types/User';
import User from '../sequelize/models/User';
import IService from './interfaces/Service';

export default class UserService implements IService<UserType> {
  private model: typeof User;

  constructor(model: typeof User) {
    this.model = model;
  }

  public async create(user: UserType): Promise<UserType | null> {
    const newUser = await this.model.create(user);
    console.log(newUser);
    return null;
  }
}
