import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../Models/UsuarioModel';

const API = 'http://localhost:3000/Usuarios/';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<UsuarioModel[]>(`${API}`);
  }

  getUsuario(id: number) {
    return this.http.get<UsuarioModel>(`${API}${id}`);
  }

  addUsuario(record: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<UsuarioModel>(`${API}`, JSON.stringify(record), {
      headers,
    });
  }

  updateUsuario(record: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<UsuarioModel>(
      `${API}${record.id}`,
      JSON.stringify(record),
      {
        headers,
      }
    );
  }

  deleteUsuario(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.delete<UsuarioModel>(`${API}${id}`, {
      headers,
    });
  }
}
