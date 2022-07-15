import { toast, ToastOptions } from 'react-toastify';
import { IForo, IForoCreate } from '../interface/foro.interface';
import { getForosService, insertForo } from '../services/foro.service';

class ClsForo {
  private configToast: ToastOptions;
  constructor() {
    this.configToast = {
      autoClose: 2000,
      closeButton: true,
      draggable: true,
    };
  }
  async createForo(foroCreate: IForoCreate, photo: string): Promise<IForo | undefined> {
    let toastId = toast.loading('Por favor espere...');
    try {
      const newForo: IForo = {
        photo,
        created_at: new Date(),
        description: foroCreate.description,
        title: foroCreate.title,
      };
      const { data } = await insertForo(newForo);
      const { success, foro } = data;
      toast.update(toastId, Object.assign({ render: `${success}`, type: 'success', isLoading: false }, this.configToast));
      return foro;
    } catch (error: any) {
      toast.update(toastId, Object.assign({ render: error.response.data.message, type: 'error', isLoading: false }, this.configToast));
      return undefined;
    }
  }
  async getForos(): Promise<IForo[]> {
    try {
      const { data } = await getForosService();
      const { foros } = data;
      return foros as IForo[];
    } catch (error: any) {
      return [];
    }
  }
}

export default new ClsForo();
