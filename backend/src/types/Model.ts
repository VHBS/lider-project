export type UserCreated = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  cpf: string;
};

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  cpf: string;
};

export type UserTypeModel = UserType | UserCreated;
