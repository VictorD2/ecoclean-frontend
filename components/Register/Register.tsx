import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { LoginIcon, PencilIcon } from '@heroicons/react/outline';

import foto from '../../assets/img/logoEco.png';

import { UserContext } from '../../auth/AuthContext';

import ClsAuth from '../../class/ClsAuth';

import { AppButton } from '../../elements/app_button';
import { AppInputText } from '../../elements/app_input_text';

import { initialStateRegister, IUser } from '../../interface/auth.interface';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { RegisterSchema } from '../../schemas/auth.schema';

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialStateRegister,
    validationSchema: Yup.object(RegisterSchema),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setLoading(true);
      const user: IUser | undefined = await ClsAuth.register(formValue);
      if (!user) return setLoading(false);
      setUser(user);
      router.push('/');
      setLoading(false);
    },
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    formik.setFieldError(e.target.name, '');
  };

  return (
    <main className="w-screen h-screen bg-gray-900 flex justify-center items-center">
      <div className="lg:w-8/12 w-11/12 h-[calc(100vh-40px)] rounded-lg shadow-primary shadow-md bg-gradient-to-b from-layout">
        <div className="flex h-2/6 justify-center items-center p-2 rounded-lg bg-transparent flex-col">
          <div className="cursor-pointer">
            <Link href="/">
              <Image alt="foto" src={foto.src} height={foto.height} width={foto.width}></Image>
            </Link>
          </div>
          <h2 className="uppercase text-white font-bold text-lg">Registrate</h2>
        </div>
        <div className="w-full h-4/6 px-4 bg-transparent">
          <form className="w-full h-full p-2 flex gap-x-10 gap-y-4 flex-row flex-wrap justify-center">
            <AppInputText
              width="w-2/5"
              className="focus:border-secondary border-2 focus:shadow-secondary focus:shadow-md transition-all duration-500"
              labelColor="text-white"
              label="Correo Electrónico"
              name="email"
              onChange={handleChangeInput}
              onFocus={handleFocus}
              helpText={formik.errors.email}
              value={formik.values.email}
            />
            <AppInputText
              width="w-2/5"
              className="focus:border-secondary border-2 focus:shadow-secondary focus:shadow-md transition-all duration-500"
              labelColor="text-white"
              label="Clave"
              name="password"
              type="password"
              onChange={handleChangeInput}
              onFocus={handleFocus}
              helpText={formik.errors.password}
              value={formik.values.password}
            />
            <AppInputText
              width="w-2/5"
              className="focus:border-secondary border-2 focus:shadow-secondary focus:shadow-md transition-all duration-500"
              labelColor="text-white"
              label="Nombre"
              name="name"
              onChange={handleChangeInput}
              onFocus={handleFocus}
              helpText={formik.errors.name}
              value={formik.values.name}
            />
            <AppInputText
              width="w-2/5"
              className="focus:border-secondary border-2 focus:shadow-secondary focus:shadow-md transition-all duration-500"
              labelColor="text-white"
              label="Apellido"
              name="lastname"
              onChange={handleChangeInput}
              onFocus={handleFocus}
              helpText={formik.errors.lastname}
              value={formik.values.lastname}
            />
            <div className="flex gap-6 flex-col w-full justify-start items-center">
              <AppButton type="submit" className="w-4/5" loading={!loading} disabled={loading} bgColor="bg-secondary" onClick={formik.handleSubmit}>
                <div className="flex gap-2">
                  <PencilIcon className="w-6" />
                  <span className="uppercase font-bold">Registrarse</span>
                </div>
              </AppButton>
              <Link href="/iniciar">
                <AppButton className="w-4/5" loading={!loading} disabled={loading} onClick={() => {}}>
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
