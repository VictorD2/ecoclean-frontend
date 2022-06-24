import { NextPage } from 'next';
import { ForoProvider } from '../components/Foro/ForoContext';
import ForoPage from '../components/Foro/Foro';

const Foro: NextPage = () => {
  return (
    <ForoProvider>
      <ForoPage />
    </ForoProvider>
  );
};

export default Foro;
