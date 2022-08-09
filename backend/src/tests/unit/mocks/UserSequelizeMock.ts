const SequelizeMock = require('sequelize-mock');

const dbConnectionMock = new SequelizeMock();

export const UserMock = {
  firstName: 'Victor',
  lastName: 'Schlichting',
  role: 'customer',
  email: 'victor@email.com',
  cpf: '12345678911',
};

export const UserSequelizeMock = dbConnectionMock.define('User', {
  userData: {
    id: 1,
    ...UserMock,
  },
  instanceMethods: {
    findOrCreate() {
      return [
        {
          id: 1,
          ...UserMock,
        },
        true,
      ];
    },
  },
});
