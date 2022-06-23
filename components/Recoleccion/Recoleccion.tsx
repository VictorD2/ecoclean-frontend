import Image from 'next/image';
import React from 'react';
import foto from '../../assets/img/carousel/item3.jpeg';
import foto2 from '../../assets/img/slider1.1fee45a6.png';

const Recoleccion = () => {
  return (
    <div className="w-full bg-background flex flex-col justify-center items-center py-14 gap-10">
      <div className="p-7 bg-white shadow-black shadow-2xl w-10/12 border-t-8 border-gray-500 rounded">
        <section className="text-justify pt-5 flex justify-center flex-col">
          <Image alt="foto" src={foto.src} height={foto.height} width={foto.width}></Image>
          <h2 className="text-2xl uppercase my-4">¿CÓMO PARTICIPAR EN EL PROGRAMA?</h2>
          <h3 className="text-xl uppercase">Etapa 1:</h3>
          <p className="text-gray-500 my-2">
            Nuestros promotores visitarán su hogar a fin de informarle de la importancia de segregar nuestros residuos y le brindará información de como participar en el programa.
          </p>
          <h3 className="text-xl uppercase">Etapa 2:</h3>
          <p className="text-gray-500 my-2">El día de la visita se entregará una bolsa verde para que pueda disponer sus residuos previamente separados. </p>
          <h3 className="text-xl uppercase">Etapa 3:</h3>
          <p className="text-gray-500 my-2">El día de la recolección en horas de la mañana deberá colocar la bolsa verde bien cerrada, en la puerta de su vivienda. </p>
          <h3 className="text-xl uppercase">Etapa 4:</h3>
          <p className="text-gray-500 my-2">
            Las bolsas verdes serán recogidas casa por casa por los operarios de la recolección a partir de las 9 am. Se empleará un camión baranda debidamente identificado.{' '}
          </p>
        </section>
      </div>
      <div className="p-7 bg-white shadow-black shadow-2xl w-10/12 border-t-8 border-gray-500 rounded">
        <section className="text-justify pt-5 flex justify-center flex-col">
          <Image alt="foto" src={foto2.src} height={foto2.height} width={foto2.width}></Image>
        </section>
      </div>
    </div>
  );
};

export default Recoleccion;
