import Image from 'next/image';
import React from 'react';
import municipalidad from '../../assets/img/Municipalidad_de_Víctor_Larco_Herrera.jpg';
const Distrito = () => {
  return (
    <div className="w-full bg-background flex justify-center py-14">
      <div className="p-7 bg-white shadow-black shadow-2xl w-10/12 border-t-8 border-gray-500 rounded">
        <h2 className="text-3xl mb-2">Distrito de Victor Larco</h2>
        <Image alt="foto" layout="responsive" src={municipalidad.src} height={municipalidad.height * 1.33} width={municipalidad.width * 1.33}></Image>
        <section className="text-justify pt-5">
          <p className="text-gray-500">
            Distrito Víctor Larco Herrera El distrito de Víctor Larco Herrera, originalmente y hasta 1955 llamado distrito de Buenos Aires, es uno de los once que conforman la provincia de Trujillo,
            ubicada en el departamento de La Libertad en el norte del Perú. Se ubica sobre una planicie a orillas del océano Pacífico y se encuentra dentro de la conurbación de la ciudad de Trujillo
            como uno de los nueve distritos que conforman el área conocida como Trujillo Metropolitano. Víctor Larco es el distrito con mayor índice de desarrollo humano (IDH) de la ciudad de
            Trujillo, según estudio publicado por el Programa de las Naciones Unidas para el Desarrollo. El distrito integra al balneario de Buenos Aires y a las localidades de Santiago de Huamán y
            Vista Alegre. El 16 de marzo de 1955 se modificó su nombre por el de Víctor Larco Herrera en memoria del ilustre filántropo trujillano quien fue un benefactor del distrito que está
            mayoritariamente habitado por familias de clase media-alta y clase alta. En la actualidad Víctor Larco es un centro urbano comercial y residencial que aún conserva gran parte de áreas
            verdes; posee zonas comerciales como la avenida Larco, la avenida Fátima, etc., zonas residenciales en crecimiento, centros de educación de todo nivel que reúne estudiantes y docentes de
            diferentes partes del país, atractivos turísticos entre los que destacan el Túnel de los Deseos en el Paseo de las Aguas, la iglesia de Huamán que data de la época colonial, el balneario
            de Buenos Aires, el Mural de Caballos de Paso, entre otros. Hacia la parte sur del distrito aún se conserva parte de su campiña en la zona cercana al río Moche y su desembocadura en el
            océano Pacífico.
          </p>
        </section>
        <h2 className="text-3xl mt-8 uppercase">Población</h2>
        <section className="text-justify pt-5">
          <p className="text-gray-500">
            Según los resultados del censo de población y vivienda del año 2007; la población total censada del distrito Víctor Larco para ese año era de 55 781 habitantes, existiendo una población
            urbana de 55.738 habitantes y una población rural de 43 habitantes. Para el año 2014 el INEI estima una población de 63 317 habitantes distribuidos mayormente en zonas urbanas del
            distrito.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Distrito;
