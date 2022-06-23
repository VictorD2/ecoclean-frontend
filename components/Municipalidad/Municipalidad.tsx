import Image from 'next/image';
import React from 'react';
import foto from '../../assets/img/BANNER2OK.169c43ef.jpg';
import foto2 from '../../assets/img/organigrama.d2f4560f.jpg';
const Municipalidad = () => {
  return (
    <div className="w-full bg-background flex justify-center py-14">
      <div className="p-7 bg-white shadow-black shadow-2xl w-10/12 border-t-8 border-gray-500 rounded">
        <h2 className="lg:text-3xl text-2xl uppercase">Municipalidad</h2>
        <section className="text-justify pt-5 flex justify-center flex-col">
          <Image src={foto.src} height={foto.height} width={foto.width}></Image>
          <p className="text-gray-500 my-10">
            Dirección: Independencia 210, Distrito de Víctor Larco Herrera 13009 Teléfono: (044) 481548 Alcalde: César Juárez Castillo Misión Institucional La Municipalidad de Víctor es el órgano de
            Gobierno Local que representa y gestiona los intereses de los vecinos victor larco en especifico San Andres 5ta etapa, promoviendo una fuerte gobernabilidad democrática, asegurando la
            mayor participación ciudadana en la formulación de las políticas locales, desarrollando al máximo sus capacidades para brindar bienes y servicios públicos locales de alta calidad. Visión
            Institucional El Gobierno local de la Municipalidad de Víctor Larco Herrera generará condiciones y clima de oportunidades para que los vecinos del Distrito alcancen el más alto nivel en la
            calidad de vida, con en una ciudad moderna, confortable, saludable y sobre todo segura, donde el desarrollo se promueva de manera integral y sustentable; aprovechando permanentemente las
            potencialidades locales para el comercio y turismo de alta calidad.
          </p>
        </section>
        <h2 className="lg:text-3xl text-2xl uppercase">ORGANIGRAMA DE LA MUNICIPALIDAD</h2>
        <section className="text-justify pt-5 flex justify-center flex-col">
          <Image src={foto2.src} height={foto2.height} width={foto2.width}></Image>
        </section>
      </div>
    </div>
  );
};

export default Municipalidad;
