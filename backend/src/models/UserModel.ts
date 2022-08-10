import User from '../sequelize/models/User';
import IModel from './interfaces/Model';
import { UserCreated, UserTypeModel, UserType } from '../types/Model';

export default class UserModel implements IModel<UserTypeModel> {
  protected model: typeof User;

  constructor(model: typeof User) {
    this.model = model;
  }

  async create(entity: UserType): Promise<UserCreated | null> {
    const [user, created] = await this.model.findOrCreate({
      where: { cpf: entity.cpf },
      defaults: entity,
    });

    if (!created) return null;

    return user.userData;
  }
}
