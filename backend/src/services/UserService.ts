import { UserType } from '../types/User';
import IService from './interfaces/Service';

export default class UserService implements IService<UserType> {
  private model: string;

  constructor() {
    this.model = 'temporary';
  }

  public create(entity: UserType): void {
    console.log(this.model);
    console.log(entity);
    // return null;
  }
}
