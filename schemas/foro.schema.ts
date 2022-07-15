import * as Yup from 'yup';

const SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg'];

export const CreateForoSchema = {
  title: Yup.string().required('El campo título es obligatorio'),
  description: Yup.string().required('El campo descripción es obligatorio'),
  photo: Yup.mixed()
    .required('No ha subido una foto')
    .test('fileFormat', 'Formato de imagen no soportado', (value) => value === null || (value && SUPPORTED_FORMATS.includes(value.type))),
};
export const EditForoSchema = {
  title: Yup.string().required('El campo título es obligatorio'),
  description: Yup.string().required('El campo descripción es obligatorio'),
  photo: Yup.mixed()
    .optional()
    .test('fileFormat', 'Formato de imagen no soportado', (value: any) => value === null || (value && SUPPORTED_FORMATS.includes(value.type))),
};
