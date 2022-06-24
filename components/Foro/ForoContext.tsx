import React, { useState } from 'react';
import { IForo, IForoContext, initialStateForo } from '../../interface/foro.interface';
export const ForoContext = React.createContext({} as IForoContext);

// eslint-disable-next-line no-undef
export const ForoProvider = ({ children }: { children: JSX.Element }) => {
  const [foro, setForo] = useState<IForo>(initialStateForo);
  const [foros, setForos] = useState<IForo[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const formSubmit = () => {};
  return (
    <ForoContext.Provider
      value={{
        foro,
        setForo,
        foros,
        setForos,
        loadingData,
        setLoadingData,
        loading,
        setLoading,
        formSubmit,
      }}
    >
      {children}
    </ForoContext.Provider>
  );
};
