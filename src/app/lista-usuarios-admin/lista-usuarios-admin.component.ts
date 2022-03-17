import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../Models/UsuarioModel';
import { AppState } from '../Store/app-state';

import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-lista-usuarios-admin',
  templateUrl: './lista-usuarios-admin.component.html',
  styleUrls: ['./lista-usuarios-admin.component.scss'],
})
export class ListaUsuariosAdminComponent implements OnInit {
  // Jeito 1
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(
    fromUsuariosSelector.getUsuariosAdmin
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
