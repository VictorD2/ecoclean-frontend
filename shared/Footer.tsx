import React from 'react';

const Footer = () => {
  return (
    <footer className="p-20 bg-layout flex flex-wrap justify-around gap-10">
      <div className="lg:w-1/4 md:w-1/3 sm:w-full w-full bg-layout">
        <ul className="w-full text-white flex flex-col gap-7 justify-center items-start">
          <li>© 2021 EcoClean</li>
          <li>
            <strong>Responsable Portal Institucional</strong>
            <br />
            Ing. Manuel Torres Agreda
          </li>
          <li>
            <strong>Responsable Acceso a Información</strong>
            <br />
            Abog. Fernando Davelois Atac (e)
          </li>
          <li>
            <strong>Central Telefónica:</strong>
            <br />
            044-481520
          </li>
        </ul>
      </div>
      <div className="lg:w-1/4 md:w-1/3 sm:w-full w-full bg-layout">
        <ul className="w-full text-white flex flex-col gap-7 justify-center items-start">
          <li>
            <strong>Email:</strong>
            <br />
            <a className="text-blue-400" href="mailto:informes@munivictorlarco.gob.pe" target="_blank">
              informes@munivictorlarco.gob.pe
            </a>
          </li>
          <li>
            <strong>Dirección:</strong>
            <br />
            Jr. Independencia 210 Buenos Aires.
          </li>
        </ul>
      </div>
      <div className="lg:w-1/4 md:w-1/3 sm:w-full w-full bg-layout">
        <ul className="w-full text-white flex flex-row gap-7 justify-start items-start">
          <li>
            <a href="https://www.youtube.com/channel/UCr16A-2jE_Z3_RVwT_5b_6g" target="_blank">
              <i className="ri-youtube-fill text-5xl text-red-600 hover:contrast-200 transition-all duration-700"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/munivictorlarcoherrera/" target="_blank">
              <i className="ri-facebook-circle-fill text-5xl text-blue-600 hover:contrast-200 transition-all duration-700"></i>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send/?phone=51949418268&text&app_absent=0/" target="_blank">
              <i className="ri-whatsapp-line text-5xl text-green-600 hover:contrast-200 transition-all duration-700"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
