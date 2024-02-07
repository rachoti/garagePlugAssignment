// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { FirebaseService } from '../services/firebase/firebase.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions, 
    private firebaseService: FirebaseService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(action =>
        this.firebaseService.login(action.username, action.password).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );
}
