import React, { useContext } from 'react';
import { AppButton } from '../../elements/app_button';
import { AppInputImage } from '../../elements/app_input_image';
import { AppInputText } from '../../elements/app_input_text';
import { AppTextArea } from '../../elements/app_textarea';
import { ForoContext } from './ForoContext';

const ModalCreate = () => {
  const { loading, setForo, foro, formSubmit } = useContext(ForoContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setForo({ ...foro, [e.target.name]: e.target.value });

  return (
    <div className="flex flex-col gap-5">
      <AppInputText className="focus:border-1 focus:border-secondary" label="Título" name={'title'} value={foro.title} onChange={handleInputChange} />
      <AppTextArea className="focus:border-1 focus:border-secondary" label="Descripción" name={'description'} value={foro.description} onChange={handleInputChange} />
      <AppInputImage name="foto" onChange={() => {}} value="" fileTypeMessage="Haz click para subir una foto" />
      <AppButton disabled={!loading} loading={loading} type="button" onClick={formSubmit}>
        <div>{foro.id ? '' : 'Publicar'}</div>
      </AppButton>
    </div>
  );
};

export default ModalCreate;
