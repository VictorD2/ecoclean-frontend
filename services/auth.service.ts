import { LoginResponse, ILogin, IRegister, RegisterResponse } from '../interface/auth.interface';
import { AxiosResponse } from 'axios';
import axios from '../util/axios';

const api = `/api/v1/user`;
// Service Login
export const login = async (email: string, password: string): Promise<AxiosResponse<LoginResponse, any>> => {
  return await axios.post(`${api}/signin`, { email, password });
};
// Service Register
export const regitrarse = async (regitrarse: IRegister): Promise<AxiosResponse<RegisterResponse, any>> => {
  return await axios.post(`${api}/signup`, regitrarse);
};
