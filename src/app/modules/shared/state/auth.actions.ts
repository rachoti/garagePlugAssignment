// auth.actions.ts
import { createAction, props } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<AuthState>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<AuthState>()
);

export const logout = createAction('[Auth] Logout');
