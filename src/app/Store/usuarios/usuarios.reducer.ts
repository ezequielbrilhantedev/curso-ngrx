import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { UsuarioModel } from './../../Models/UsuarioModel';
import * as fromUsuariosAction from '../usuarios/usuarios.actions';

export interface UsuariosState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null;
  error: string | '';
}

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: '',
};

const _usuariosReducer = createReducer(
  initialState,
  on(fromUsuariosAction.LoadUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
  })),
  on(fromUsuariosAction.LoadUsuariosFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.LoadUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuario: payload,
    error: '',
  })),
  on(fromUsuariosAction.LoadUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.CreateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload],
    error: '',
  })),
  on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.UpdateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => {
      if (row.id == payload.id) {
        return payload;
      } else {
        return row;
      }
    }),
    error: '',
  })),
  on(fromUsuariosAction.UpdateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.DeleteUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((filter) => filter.id != payload),
    error: '',
  })),
  on(fromUsuariosAction.DeleteUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

// Selector

export function usuariosReducer(state = initialState, action: Action) {
  return _usuariosReducer(state, action);
}

const getUsuariosFeatureState =
  createFeatureSelector<UsuariosState>('usuarios');

export const getUsuarios = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuarios
);

export const getUsuario = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuario
);

export const getUsuarioErro = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.error
);
