import * as Yup from 'yup';

export const LoginSchema = {
  email: Yup.string().required('El campo correo es obligatorio').email('El correo no tiene un formato adecuado'),
  password: Yup.string().required('El campo contraseña es obligatorio').min(8, 'La contraseña tiene que ser de minimo 8 caracteres '),
};
export const RegisterSchema = {
  email: Yup.string().required('El campo correo es obligatorio').email('El correo no tiene un formato adecuado'),
  password: Yup.string().required('El campo contraseña es obligatorio').min(8, 'La contraseña tiene que ser de minimo 8 caracteres '),
  name: Yup.string().required('El campo nombre es obligatorio'),
  lastname: Yup.string().required('El campo apellido es obligatorio'),
};
