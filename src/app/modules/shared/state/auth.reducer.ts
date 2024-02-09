// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: any;
  error: any;
}

const initialState: AuthState = {
  user: null,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    user: action,
    error: null
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    user: null,
    error: action
  })),
  on(AuthActions.logout, state => ({
    ...state,
    user: null,
    error: null
  }))
);
