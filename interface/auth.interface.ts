export interface IUser {
  id?: number;
  name: string;
  lastname: string;
  email: string;
  exp?: number;
  id_rol?: number;
  rol?: string;
}
export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister {
  name: string;
  lastname: string;
  email: string;
  password: string;
}
export interface LoginResponse {
  success?: string;
  user?: IUser;
  token?: string;
}
export interface RegisterResponse {
  success?: string;
  user?: IUser;
  token?: string;
}

export interface IAuthContext {
  user: IUser;
  setUser: Function;
}

export const initialStateUser: IUser = {
  email: '',
  lastname: '',
  name: '',
};

export const initialStateLogin: ILogin = {
  email: '',
  password: '',
};
export const initialStateRegister: IRegister = {
  email: '',
  password: '',
  lastname: '',
  name: '',
};
