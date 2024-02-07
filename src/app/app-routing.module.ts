import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro-page',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/features/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'intro-page',
    loadChildren: () => import('./modules/features/intro-page/intro-page.module').then( m => m.IntroPagePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/features/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
