import { CreateForoResponse, GetForosResponse, IForo } from '../interface/foro.interface';
import { AxiosResponse } from 'axios';
import axios from '../util/axios';

const api = `/api/v1/foro`;
// Service Create Foro
export const insertForo = async (foro: IForo): Promise<AxiosResponse<CreateForoResponse, any>> => {
  return await axios.post(`${api}`, foro);
};
// Service Create Foro
export const getForosService = async (): Promise<AxiosResponse<GetForosResponse, any>> => {
  return await axios.get(`${api}`);
};
