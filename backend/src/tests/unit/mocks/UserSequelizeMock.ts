const SequelizeMock = require('sequelize-mock');

const dbConnectionMock = new SequelizeMock();

export const UserMockIn = {
  firstName: 'Victor',
  lastName: 'Schlichting',
  role: 'customer',
  email: 'victor@email.com',
  cpf: '12345678911',
  password: '123456',
};

export const UserMockOut = {
  id: 1,
  firstName: 'Victor',
  lastName: 'Schlichting',
  role: 'customer',
  email: 'victor@email.com',
  cpf: '12345678911',
};

export const UserSequelizeMock = dbConnectionMock.define('User', {
  userData: UserMockOut,
  instanceMethods: {
    findOrCreate() {
      return [UserMockOut, true];
    },
  },
});
