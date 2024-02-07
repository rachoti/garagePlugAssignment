import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, delay, from, of } from 'rxjs';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private auth: Auth,
    private router: Router,
    private loadingService: LoadingService,
  ) {}

  async loginWithEmail(email: string, password: string): Promise<any> {
    this.loadingService.showLoading();
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        this.loadingService.stopLoading();
        this.router.navigateByUrl('home/post');
      })
      .catch((e) => {
        const status = e.message;
        switch (status) {
          case 'Firebase: Error (auth/user-not-found).':
            this.loadingService.stopLoading();
            break;
          case 'Firebase: Error (auth/wrong-password).':
            this.loadingService.stopLoading();
            break;
          case 'Firebase: Error (auth/wrong-password).':
            this.loadingService.stopLoading();
            break;
          default:
            this.loadingService.stopLoading();
        }
      });
  }

  login(email: string, password: string): Observable<any> {
    return from(this.loginWithEmail(email, password));
  }

  async clickToSignIn() {
      this.loadingService.showLoading();
      signInWithPopup(this.auth, new GoogleAuthProvider).then(() => {
        this.loadingService.stopLoading();
        this.router.navigateByUrl('home/post');
      }).catch((e) => {
        const status = e.message;
        switch (status) {
          case 'Firebase: Error (auth/operation-not-allowed)':
            this.loadingService.stopLoading();
            break;
          case 'Firebase: Error (auth/popup-closed-by-user).':
            this.loadingService.stopLoading();
            break;
          default:
            this.loadingService.stopLoading();
            alert('something went wrong');
        }
      });
  }
}
