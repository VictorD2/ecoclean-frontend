import { toast, ToastOptions } from 'react-toastify';
import { IRegister, IUser } from '../interface/auth.interface';
import { login, regitrarse } from '../services/auth.service';

class ClsAuth {
  private configToast: ToastOptions;

  constructor() {
    this.configToast = {
      autoClose: 2000,
      closeButton: true,
      draggable: true,
    };
  }

  async login(email: string, password: string): Promise<IUser | undefined> {
    let toastId = toast.loading('Por favor espere...');
    try {
      const { data } = await login(email, password);
      const { success, token, user } = data;
      if (success && token && user) {
        localStorage.setItem('token', token);
        toast.update(toastId, Object.assign({ render: `${success}, Bienvenido ${user.name}`, type: 'success', isLoading: false }, this.configToast));
        return user;
      }
    } catch (error: any) {
      toast.update(toastId, Object.assign({ render: error.response.data.message, type: 'error', isLoading: false }, this.configToast));
      return undefined;
    }
  }
  async register(register: IRegister): Promise<IUser | undefined> {
    let toastId = toast.loading('Por favor espere...');
    try {
      const { data } = await regitrarse(register);
      const { success, token, user } = data;
      if (success && token && user) {
        localStorage.setItem('token', token);
        toast.update(toastId, Object.assign({ render: `${success}, Bienvenido ${user.name}`, type: 'success', isLoading: false }, this.configToast));
        return user;
      }
    } catch (error: any) {
      toast.update(toastId, Object.assign({ render: error.response.data.message, type: 'error', isLoading: false }, this.configToast));
      return undefined;
    }
  }

  async logOut() {
    localStorage.removeItem('token');
  }
}

export default new ClsAuth();
