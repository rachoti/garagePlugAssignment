import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: HTMLIonLoadingElement;
  constructor(private loadingCtrl: LoadingController) { }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 30000,
    });

    this.loading.present();
  }

  async stopLoading() {
    this.loading.dismiss();
  }
}
