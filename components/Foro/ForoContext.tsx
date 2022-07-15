import React, { useEffect, useState } from 'react';
import { IForo, IForoContext, initialStateForo, initialStateForoCreate } from '../../interface/foro.interface';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { v4 as uuidv4 } from 'uuid';

import { CreateForoSchema, EditForoSchema } from '../../schemas/foro.schema';
import { storageObject } from '../../util/firebase';

import ClsForo from '../../class/ClsForo';

export const ForoContext = React.createContext({} as IForoContext);

// eslint-disable-next-line no-undef
export const ForoProvider = ({ children }: { children: JSX.Element }) => {
  const [foro, setForo] = useState<IForo>(initialStateForo);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [foros, setForos] = useState<IForo[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const getForos = async () => {
    const res = await ClsForo.getForos();
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      const starsRef = storageObject.ref(storageObject.storage, element.photo.toString());
      const url = await storageObject.getDownloadURL(starsRef);
      element.photo = url;
    }
    setForos(res);
  };

  const formik = useFormik({
    initialValues: initialStateForoCreate,
    validationSchema: Yup.object(CreateForoSchema),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setLoading(true);
      const storageRef = storageObject.ref(storageObject.storage, uuidv4());
      if (typeof formValue.photo === 'string') return;
      const snapshot = await storageObject.uploadBytes(storageRef, formValue.photo);
      const newForo = await ClsForo.createForo(formValue, snapshot.metadata.fullPath);
      if (newForo) {
        const starsRef = storageObject.ref(storageObject.storage, newForo.photo.toString());
        const url = await storageObject.getDownloadURL(starsRef);
        newForo.photo = url;
        setForos([newForo, ...foros]);
        setForo(initialStateForo);
        setOpenModal(false);
      }
    },
  });

  const formikEdit = useFormik({
    initialValues: { title: foro.title, description: foro.description, photo: foro.photo },
    validationSchema: Yup.object(EditForoSchema),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setLoading(true);
      console.log(formValue);
    },
  });

  useEffect(() => {
    getForos();
    return () => {
      setForos([]);
    };
  }, []);

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
        formik,
        formikEdit,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </ForoContext.Provider>
  );
};
