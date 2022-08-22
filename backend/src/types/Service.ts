export type UserCreate = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cpf: string;
};

export type UserCreated = {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    cpf: string;
  };
  token: string;
};

export type FailMessage = {
  message: string;
};

export type UserTypeService = FailMessage | UserCreated | UserCreate;
