import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InterceptorService } from './modules/shared/services/interceptor/interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './modules/shared/state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './modules/shared/state/auth.effects';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    provideFirebaseApp(()=> initializeApp(environment.firebase)), provideAuth(() => getAuth()),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
     provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {}
