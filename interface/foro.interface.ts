export interface IForo {
  id?: number;
  title: string;
  description: string;
  autor: string;
  id_autor: number;
  photo: string | File;
  date: Date | string;
}

export interface IForoContext {
  foro: IForo;
  setForo: Function;
  foros: IForo[];
  setForos: Function;
  loadingData: boolean;
  setLoadingData: Function;
  loading: boolean;
  setLoading: Function;
  formSubmit: Function;
}

export const initialStateForo: IForo = {
  title: '',
  description: '',
  autor: '',
  id_autor: 0,
  photo: '',
  date: '',
};
