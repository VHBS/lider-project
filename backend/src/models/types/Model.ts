export type UserCreated = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  cpf: string;
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  cpf: string;
};

export type UserTypeModel = User | UserCreated;
