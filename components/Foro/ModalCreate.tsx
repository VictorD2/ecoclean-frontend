import React, { useContext } from 'react';
import { AppButton } from '../../elements/app_button';
import { AppInputImage } from '../../elements/app_input_image';
import { AppInputText } from '../../elements/app_input_text';
import { AppTextArea } from '../../elements/app_textarea';
import { ForoContext } from './ForoContext';

const ModalCreate = () => {
  const { loading, foro, formik, formikEdit } = useContext(ForoContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldError(e.target.name, '');
  };

  return (
    <div className="flex flex-col gap-5">
      <AppInputText
        helpText={foro.id ? formikEdit.errors.title : formik.errors.title}
        onFocus={handleFocus}
        className="focus:border-1 focus:border-secondary"
        label="Título"
        name="title"
        value={foro.id ? formikEdit.values.title : formik.values.title}
        onChange={handleInputChange}
      />
      <AppTextArea
        helpText={foro.id ? formikEdit.errors.description : formik.errors.description}
        onFocus={handleFocus}
        className="focus:border-1 focus:border-secondary"
        label="Descripción"
        name="description"
        value={foro.id ? formikEdit.values.description : formik.values.description}
        onChange={handleInputChange}
      />
      <AppInputImage
        name="photo"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (!e.target.files) return;
          formik.setFieldValue(e.target.name, e.target.files[0]);
        }}
        value={foro.id && typeof formikEdit.values.photo === 'string' ? formikEdit.values.photo : ''}
        helpText={foro.id ? formikEdit.errors.photo : formik.errors.photo}
        fileTypeMessage="Haz click para subir una foto"
      />
      <AppButton disabled={!loading} loading={loading} type="button" onClick={foro.id ? formikEdit.submitForm : formik.submitForm}>
        <div>{foro.id ? 'Editar' : 'Publicar'}</div>
      </AppButton>
    </div>
  );
};

export default ModalCreate;
