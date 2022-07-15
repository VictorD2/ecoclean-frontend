import { FormikProps } from 'formik';

export interface IForo {
  id?: number;
  title: string;
  description: string;
  author?: string;
  id_autor?: number;
  photo: string | File;
  created_at: Date | string;
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
  formik: FormikProps<IForoCreate>;
  formikEdit: FormikProps<IForoCreate>;
  openModal: boolean;
  setOpenModal: Function;
}

export const initialStateForo: IForo = {
  title: '',
  description: '',
  author: '',
  id_autor: 0,
  photo: '',
  created_at: '',
};
export interface IForoCreate {
  title: string;
  description: string;
  photo: string | File;
}

export const initialStateForoCreate: IForoCreate = {
  title: '',
  description: '',
  photo: '',
};

export interface IForoEdit {
  title: string;
  description: string;
  photo: string | File;
}
export const initialStateForoEdit: IForoEdit = {
  title: '',
  description: '',
  photo: '',
};

export interface CreateForoResponse {
  success?: string;
  foro?: IForo;
}
export interface GetForosResponse {
  success?: string;
  foros?: IForo[];
}
