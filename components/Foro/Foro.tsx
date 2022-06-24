import { PlusIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import foto from '../../assets/img/carousel/item1.jpg';
import { UserContext } from '../../auth/AuthContext';
import { AppButton } from '../../elements/app_button';
import { AppModal } from '../../elements/app_modal';
import ModalCreate from './ModalCreate';
const Foro = () => {
  const { user } = useContext(UserContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="w-full bg-background flex flex-col items-center gap-10 justify-center py-14">
      <div className="p-7 bg-white shadow-black shadow-md w-10/12 border-t-8 border-gray-500 rounded flex justify-between items-center">
        <h2 className="text-3xl uppercase">Foro de Denuncias</h2>
        {user.id && (
          <AppButton onClick={() => setOpenModal(true)}>
            <span className="flex flex-row gap-2">
              <PlusIcon className="w-5"></PlusIcon>
              Publica una denuncia
            </span>
          </AppButton>
        )}
      </div>
      <div className="p-7 bg-white shadow-black shadow-md w-10/12 border-t-8 border-gray-500 rounded flex flex-col gap-4">
        <h2 className="text-2xl uppercase">Titulo Fecha</h2>
        <h4 className="text-lg">Publicado por: </h4>
        <Image priority alt="foto 1" src={foto.src} width={foto.width} height={foto.height}></Image>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa distinctio rerum tempora consectetur delectus obcaecati, tempore odit maiores quos laborum rem cum alias explicabo libero
          dicta repellendus ullam. Ducimus. Vero nobis mollitia eveniet ea magnam vitae maiores quaerat! Fugit vitae cumque reprehenderit, omnis perferendis soluta impedit aspernatur eos excepturi
          temporibus earum at quod, aliquam totam eligendi eius quisquam. Minima? Harum, ex quae dolore sed atque quis. Repudiandae dignissimos porro rem quo corrupti fugit, aliquam quod neque labore
          ratione temporibus unde nemo facere eos excepturi aspernatur cumque odio cum consequuntur. Illum saepe accusamus perferendis numquam eveniet! Atque alias corrupti quia fuga in vel officiis,
          placeat, voluptatem, accusamus aliquam aperiam suscipit. Ipsam quis mollitia ut quam facere magni sed tempora velit.
        </p>
      </div>
      <div className="p-7 bg-white shadow-black shadow-md w-10/12 border-t-8 border-gray-500 rounded flex flex-col gap-4">
        <h2 className="text-2xl uppercase">Titulo Fecha</h2>
        <h4 className="text-lg">Publicado por: </h4>
        <Image priority alt="foto 1" src={foto.src} width={foto.width} height={foto.height}></Image>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa distinctio rerum tempora consectetur delectus obcaecati, tempore odit maiores quos laborum rem cum alias explicabo libero
          dicta repellendus ullam. Ducimus. Vero nobis mollitia eveniet ea magnam vitae maiores quaerat! Fugit vitae cumque reprehenderit, omnis perferendis soluta impedit aspernatur eos excepturi
          temporibus earum at quod, aliquam totam eligendi eius quisquam. Minima? Harum, ex quae dolore sed atque quis. Repudiandae dignissimos porro rem quo corrupti fugit, aliquam quod neque labore
          ratione temporibus unde nemo facere eos excepturi aspernatur cumque odio cum consequuntur. Illum saepe accusamus perferendis numquam eveniet! Atque alias corrupti quia fuga in vel officiis,
          placeat, voluptatem, accusamus aliquam aperiam suscipit. Ipsam quis mollitia ut quam facere magni sed tempora velit.
        </p>
      </div>
      <div className="p-7 bg-white shadow-black shadow-md w-10/12 border-t-8 border-gray-500 rounded flex flex-col gap-4">
        <h2 className="text-2xl uppercase">Titulo Fecha</h2>
        <h4 className="text-lg">Publicado por: </h4>
        <Image priority alt="foto 1" src={foto.src} width={foto.width} height={foto.height}></Image>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa distinctio rerum tempora consectetur delectus obcaecati, tempore odit maiores quos laborum rem cum alias explicabo libero
          dicta repellendus ullam. Ducimus. Vero nobis mollitia eveniet ea magnam vitae maiores quaerat! Fugit vitae cumque reprehenderit, omnis perferendis soluta impedit aspernatur eos excepturi
          temporibus earum at quod, aliquam totam eligendi eius quisquam. Minima? Harum, ex quae dolore sed atque quis. Repudiandae dignissimos porro rem quo corrupti fugit, aliquam quod neque labore
          ratione temporibus unde nemo facere eos excepturi aspernatur cumque odio cum consequuntur. Illum saepe accusamus perferendis numquam eveniet! Atque alias corrupti quia fuga in vel officiis,
          placeat, voluptatem, accusamus aliquam aperiam suscipit. Ipsam quis mollitia ut quam facere magni sed tempora velit.
        </p>
      </div>

      <AppModal overflowClosed width="lg:w-1/2 w-10/12" open={openModal} onClose={() => setOpenModal(false)}>
        <ModalCreate />
      </AppModal>
    </div>
  );
};

export default Foro;
