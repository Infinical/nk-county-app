import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async presentToast(message, type?: string) {
    const toast = await this.toastController.create({
      message:
        message === '' ? 'Something went wrong, please try again!' : message,
      duration: 3000,
      position: 'top',
      color: type === 'error' ? 'danger' : 'success',
    });
    toast.present();
  }
}
