import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../Models/UsuarioModel';
import { UsuariosService } from '../Repository/UsuariosService';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: UsuarioModel[] = [];

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuarios = usuarios;
    });
  }
}
