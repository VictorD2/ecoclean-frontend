import { LoginIcon, PencilIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import foto from '../../assets/img/logoEco.png';
import { UserContext } from '../../auth/AuthContext';
import ClsAuth from '../../class/ClsAuth';
import { AppButton } from '../../elements/app_button';
import { AppInputText } from '../../elements/app_input_text';
import { initialStateRegister, IRegister, IUser } from '../../interface/auth.interface';

const Register = () => {
  const [register, setRegister] = useState<IRegister>(initialStateRegister);
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const user: IUser | undefined = await ClsAuth.register(register);
    if (!user) return setLoading(false);
    setUser(user);
    router.push('/');
    setLoading(false);
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setRegister({ ...register, [e.target.name]: e.target.value });

  return (
    <main className="w-screen h-screen bg-gray-900 flex justify-center items-center">
      <div className="lg:w-8/12 w-11/12 h-[calc(100vh-40px)] rounded-lg shadow-primary shadow-md bg-gradient-to-b from-layout">
        <div className="flex justify-center items-center p-5 rounded-lg bg-transparent flex-col">
          <div className="cursor-pointer">
            <Link href="/">
              <Image alt="foto" src={foto.src} height={foto.height} width={foto.width}></Image>
            </Link>
          </div>
          <h2 className="uppercase text-white font-bold text-lg">Registrate</h2>
        </div>
        <div className="w-full h-[calc(100%-435px)] px-4 pb-4 bg-transparent">
          <form onSubmit={handleSubmitForm} className="w-full h-full p-2 flex gap-10 flex-row flex-wrap justify-center">
            <AppInputText
              width="w-2/5"
              className="focus:border-secondary border-2 focus:shadow-secondary focus:shadow-md transition-all duration-500"
              labelColor="text-white"
              label="Correo Electrónico"
              name="email"
              onChange={handleChangeInput}
              value={register.email}
            />
            <AppInputText
              width="w-2/5"
              className="focus:border-secondary border-2 focus:shadow-secondary focus:shadow-md transition-all duration-500"
              labelColor="text-white"
              label="Clave"
              name="password"
              type="password"
              onChange={handleChangeInput}
              value={register.password}
            />
            <AppInputText
              width="w-2/5"
              className="focus:border-secondary border-2 focus:shadow-secondary focus:shadow-md transition-all duration-500"
              labelColor="text-white"
              label="Nombre"
              name="name"
              onChange={handleChangeInput}
              value={register.name}
            />
            <AppInputText
              width="w-2/5"
              className="focus:border-secondary border-2 focus:shadow-secondary focus:shadow-md transition-all duration-500"
              labelColor="text-white"
              label="Apellido"
              name="lastname"
              onChange={handleChangeInput}
              value={register.lastname}
            />
            <div className="flex gap-6 pb-4 flex-col h-full w-full justify-end items-center">
              <AppButton type="submit" className="justify-self-end w-4/5" loading={!loading} disabled={loading} bgColor="bg-secondary" onClick={() => {}}>
                <div className="flex gap-2">
                  <PencilIcon className="w-6" />
                  <span className="uppercase font-bold">Registrarse</span>
                </div>
              </AppButton>
              <Link href="/iniciar">
                <AppButton className="justify-self-end w-4/5" loading={!loading} disabled={loading} onClick={() => {}}>
                  <div className="flex gap-2">
                    <LoginIcon className="w-6" />
                    <span className="uppercase font-bold">Iniciar Sesión</span>
                  </div>
                </AppButton>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
