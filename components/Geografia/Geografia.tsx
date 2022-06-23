import React from 'react';
import { AppTable } from '../../elements/app_table';

const Geografia = () => {
  const filas = [
    { titulo: 'Departamento', valor: 'La Libertad' },
    { titulo: 'Provincia', valor: 'Trujillo' },
    { titulo: 'Distrito', valor: 'Víctor Larco Herrera' },
    { titulo: 'Altura Capital (m.s.n.m.)', valor: '0' },
    { titulo: 'Clima', valor: '	12º C – 30º C' },
    { titulo: 'Latitud', valor: 'O 79°2’44.38″' },
    { titulo: 'Longitud', valor: 'S 8°8’22.2″' },
    { titulo: 'Número de Sectores', valor: '14' },
    { titulo: 'Número de manzanas', valor: '883' },
    { titulo: 'Número de lotes (2014)', valor: '13,307' },
    { titulo: 'Número de establecimientos comerciales (2019)', valor: '3,481' },
    { titulo: 'Número de predios (2019)', valor: '25,853' },
    { titulo: 'Número de contribuyentes (2019)', valor: '20,406' },
    { titulo: 'Superficie Territorial', valor: '40 km2' },
  ];
  const rows = filas.map((item) => {
    return (
      <tr className="h-10 text-gray-500">
        <td>{item.titulo}</td>
        <td>{item.valor}</td>
      </tr>
    );
  });
  return (
    <div className="w-full bg-background flex justify-center py-14">
      <div className="p-7 bg-white shadow-black shadow-2xl w-10/12 border-t-8 border-gray-500 rounded">
        <h2 className="text-3xl uppercase">Geografia</h2>
        <section className="text-justify pt-5">
          <p className="text-gray-500 mb-5">
            El distrito de Víctor Larco Herrera es uno de los 11 distritos de la provincia de Trujillo. Está situado en la parte suroeste de la provincia de Trujillo a la margen derecha del río Moche
            el cual es la referencia del límite hacia el sur con Moche. Hacia el oeste limita con el océano Pacífico. Limita hacia el norte con los distritos de Huanchaco y distrito de Trujillo y
            hacia el este limita también con el distrito de Trujillo. Con una extensión de 40 kilómetros cuadrados y cuenta con 14 sectores.
          </p>
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31597.069564439546!2d-79.047985!3d-8.138722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d47a075c8c1%3A0xde43bc697ca8d038!2sV%C3%ADctor%20Larco%20Herrera!5e0!3m2!1ses!2spe!4v1655942647202!5m2!1ses!2spe"
            width={600}
            height={750}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <AppTable columns={[' ', ' ']} count={rows.length} loading={true} rows={rows} />
        </section>
      </div>
    </div>
  );
};

export default Geografia;
