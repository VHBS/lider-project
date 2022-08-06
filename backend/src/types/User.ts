export type UserCreate = {
  email: string;
  password: string;
  name: string;
};

export type UserCreated = {
  user: { id: number; email: string };
  token: string;
};

export type FailMessage = {
  message: string;
};

export type UserType = FailMessage | UserCreated | UserCreate;
