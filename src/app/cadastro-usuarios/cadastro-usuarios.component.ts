import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuarioModel } from '../Models/UsuarioModel';
import { AppState } from '../Store/app-state';
import { UsuariosService } from './../Repository/UsuariosService';
import * as fromUsuariosActions from '../Store/usuarios/usuarios.actions';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss'],
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(
    // private usuarioService: UsuariosService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  addUsuario() {
    if (this.model.id == 0) {
      // this.usuarioService.addUsuario(this.model).subscribe();
      this.store.dispatch(
        fromUsuariosActions.CreateUsuario({ payload: this.model })
      );
    } else {
      // this.usuarioService.updateUsuario(this.model);
    }
  }
}
