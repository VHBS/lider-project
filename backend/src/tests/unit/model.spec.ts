import { UserMockOut, UserMockIn, UserSequelizeMock } from './mocks/UserSequelizeMock';

import UserModel from '../../models/UserModel';

describe('Testing Model', () => {
  it('Create a new user', async () => {
    const userModel = new UserModel(UserSequelizeMock);
    const newUser = await userModel.create(UserMockIn);

    expect(newUser).toEqual(UserMockOut);
  });

  it('Dont create a new user', async () => {
    UserSequelizeMock.$queryInterface.$useHandler((query: string) => {
      if (query === 'findOrCreate') {
        return [null, false];
      }
      return null;
    });
    const userModel = new UserModel(UserSequelizeMock);
    const newUser = await userModel.create(UserMockIn);

    expect(newUser).toEqual(null);
  });
});
