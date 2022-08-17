import IModel from '../../models/interfaces/Model';
import UserService from '../../services/UserService';
import { UserTypeModel } from '../../types/Model';
import { UserMockIn, UserMockOut } from './mocks/UserSequelizeMock';

class UserModelMock implements IModel<UserTypeModel> {
  create = async (): Promise<UserTypeModel> => {
    return UserMockOut;
  };
}

describe('Testing Service', () => {
  it('Create a new user', async () => {
    const userService = new UserService(new UserModelMock());
    const newUser = await userService.create(UserMockIn);
    expect(newUser).toEqual({
      user: UserMockOut,
      token: 'teste',
    });
  });
});
