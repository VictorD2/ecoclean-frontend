import { PlusIcon } from '@heroicons/react/outline';
import React, { useContext } from 'react';
import { UserContext } from '../../auth/AuthContext';
import { AppButton } from '../../elements/app_button';
import { AppModal } from '../../elements/app_modal';
import { initialStateForo } from '../../interface/foro.interface';
import { ForoContext } from './ForoContext';
import ForoItem from './ForoItem';
import ModalCreate from './ModalCreate';

const Foro = () => {
  const { user } = useContext(UserContext);
  const { formik, foros, setForo, setOpenModal, openModal } = useContext(ForoContext);

  const handleOpenModal = () => {
    formik.resetForm();
    setForo(initialStateForo);
    setOpenModal(true);
  };

  return (
    <div className="w-full bg-background flex flex-col items-center gap-10 justify-center py-14">
      <div className="p-7 bg-white shadow-black shadow-md w-10/12 border-t-8 border-gray-500 rounded flex justify-between items-center">
        <h2 className="text-3xl uppercase">Foro de Denuncias</h2>
        {user.id && (
          <AppButton onClick={handleOpenModal}>
            <span className="flex flex-row gap-2">
              <PlusIcon className="w-5"></PlusIcon>
              Publica una denuncia
            </span>
          </AppButton>
        )}
      </div>
      {foros.map((item, i) => {
        return <ForoItem key={i} foro={item} />;
      })}
      <AppModal overflowClosed width="lg:w-1/2 w-10/12" open={openModal} onClose={() => setOpenModal(false)}>
        <ModalCreate />
      </AppModal>
    </div>
  );
};

export default Foro;
