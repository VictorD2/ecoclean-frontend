import React from 'react';
import { IForo } from '../../interface/foro.interface';

type ForoItemProps = {
  foro: IForo;
};

const ForoItem = ({ foro }: ForoItemProps) => {
  return (
    <div className="p-7 bg-white shadow-black shadow-md w-10/12 border-t-8 border-gray-500 rounded flex flex-col gap-4">
      <h2 className="text-2xl uppercase">
        {foro.title} {foro.created_at.toString()}
      </h2>
      <h4 className="text-lg">Publicado por: {foro.author}</h4>
      {/*eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${foro.photo}`} alt={foro.title} />
      <p>{foro.description}</p>
    </div>
  );
};

export default ForoItem;
