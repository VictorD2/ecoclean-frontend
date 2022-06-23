import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AppDropdown from '../elements/app_dropdown_menu';
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
    name: 'Recolección',
  },
  {
    link: 'foro',
    name: 'Foro de Denuncias',
  },
];

const Navbar = () => {
  return (
    <header className="h-24 w-full bg-layout">
      <nav className="w-full h-full flex flex-row justify-center gap-4 items-center">
        <Link href="/">
          <Image alt="EcoClean Logo" className="cursor-pointer" width={logo.width / 3.4} height={logo.height / 3.4} src={logo.src}></Image>
        </Link>
        <ul className="h-full flex justify-center gap-10 items-center">
          {routes.map((item, i) => {
            if (item.child) return <AppDropdown as="li" key={i} name={item.name} child={item.child} />;
            return (
              <li key={i} className="text-gray-400 font-bold hover:text-white uppercase transition-all duration-700">
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
