module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'Victor',
          last_name: 'Schlichting',
          role: 'admin',
          email: 'victor@email.com',
          password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW', // secret_admin
          cpf: '12345678990',
          status: 'inactive',
        },
        {
          first_name: 'Hugo',
          last_name: '',
          role: 'customer',
          email: 'hugo@email.com',
          password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', // secret_user
          cpf: '12345678991',
          status: 'active',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
