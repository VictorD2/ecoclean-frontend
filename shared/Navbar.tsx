import { LoginIcon, MenuIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { UserContext } from '../auth/AuthContext';
import ClsAuth from '../class/ClsAuth';
import { AppButton } from '../elements/app_button';
import AppDropdown from '../elements/app_dropdown_menu';
import { initialStateUser } from '../interface/auth.interface';
import logo from './../assets/img/logo.jpeg';

const routes = [
  {
    link: '#',
    name: 'Distrito',
    child: [
      { link: 'distrito', name: 'Distrito' },
      { link: 'geografia', name: 'Geografía' },
      { link: 'historia', name: 'Historia' },
    ],
  },
  {
    link: 'municipalidad',
    name: 'Municipalidad',
  },
  {
    link: 'recoleccion',
    name: 'Puntos de Recolección',
  },
  {
    link: 'foro',
    name: 'Foro de Denuncias',
  },
];

const Navbar = () => {
  const [visible, setvisible] = useState<boolean>(false);
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const logOut = () => {
    setUser(initialStateUser);
    ClsAuth.logOut();
  };
  return (
    <>
      <header className="h-24 w-full bg-layout lg:relative sticky top-0 z-20">
        <nav className="w-full h-full flex flex-row lg:justify-center justify-end gap-4 items-center">
          <div className="lg:hidden flex mr-4">
            <AppButton
              onClick={() => {
                setvisible(!visible);
              }}
            >
              <MenuIcon className="text-white w-5" />
            </AppButton>
          </div>
          <div className="lg:flex hidden">
            <Link href="/">
              <Image alt="EcoClean Logo" className="cursor-pointer" width={logo.width / 3.4} height={logo.height / 3.4} src={logo.src}></Image>
            </Link>
          </div>
          <ul className="h-full lg:flex hidden justify-center gap-5 items-center">
            {routes.map((item, i) => {
              if (item.child) return <AppDropdown as="li" key={i} name={item.name} child={item.child} />;
              return (
                <li key={i} className={`${router.pathname.includes(item.link) ? 'text-white' : 'text-gray-400'} font-bold hover:text-white uppercase transition-all duration-700`}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
            <li>
              <div className="lg:flex hidden">
                {!user.id && (
                  <Link href="/iniciar">
                    <AppButton onClick={() => {}}>
                      <div className="flex gap-2">
                        <LoginIcon className="w-5" />
                        <span className="uppercase">ingresar</span>
                      </div>
                    </AppButton>
                  </Link>
                )}
                {user.id && (
                  <Link href="/">
                    <AppButton onClick={logOut}>
                      <div className="flex gap-2">
                        <LoginIcon className="w-5" />
                        <span className="uppercase">salir</span>
                      </div>
                    </AppButton>
                  </Link>
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* Responsive Navbar */}
        <nav
          className={`${
            visible ? '-translate-x-full' : ''
          } transition-all duration-300 z-10 bg-layout top-0 w-[240px] h-screen fixed lg:hidden flex flex-col justify-start gap-10 pt-5 items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent`}
        >
          <div>
            <Link href="/">
              <Image alt="EcoClean Logo" className="cursor-pointer" width={logo.width / 3.4} height={logo.height / 3.4} src={logo.src}></Image>
            </Link>
          </div>
          <ul className="flex flex-col justify-center gap-5 items-center pb-10">
            {routes.map((item, i) => {
              if (item.child) return <AppDropdown as="li" key={i} name={item.name} child={item.child} />;
              return (
                <li
                  onClick={() => {
                    setvisible(!visible);
                  }}
                  key={i}
                  className={`${router.pathname.includes(item.link) ? 'text-white' : 'text-gray-400'} font-bold hover:text-white uppercase transition-all duration-700`}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
            <li>
              {!user.id && (
                <Link href="/iniciar">
                  <AppButton onClick={() => {}}>
                    <div className="flex gap-2">
                      <LoginIcon className="w-5" />
                      <span className="uppercase">ingresar</span>
                    </div>
                  </AppButton>
                </Link>
              )}
              {user.id && (
                <Link href="/">
                  <AppButton onClick={logOut}>
                    <div className="flex gap-2">
                      <LoginIcon className="w-5" />
                      <span className="uppercase">Salir</span>
                    </div>
                  </AppButton>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
