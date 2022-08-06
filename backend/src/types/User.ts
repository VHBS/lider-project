export type UserCreate = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cpf: string;
};

export type UserCreated = {
  user: { id: number; email: string; firstName: string };
  token: string;
};

export type FailMessage = {
  message: string;
};

export type UserType = FailMessage | UserCreated | UserCreate;
