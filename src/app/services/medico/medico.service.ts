import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Medico } from '../../models/medico.model';
// import { ImagenPipe } from '../../pipes/imagen.pipe';




@Injectable()
export class MedicoService {

  totalMedicos = 0;

  constructor(
    public http: HttpClient,
    // tslint:disable-next-line:variable-name
    public _usuarioService: UsuarioService
  ) { }


  // tslint:disable-next-line:typedef
  cargarMedico() {
  const desde = JSON.parse( localStorage.getItem('desdem'));
  const url = URL_SERVICIOS + 'medico?desde=' + desde;

  return this.http.get( url )
        .map((resp: any) => {
        this.totalMedicos = resp.total;
        return resp.medicos;
        });
  }

  // tslint:disable-next-line:typedef
  guardardesdeStorage( desdem: number) {
    localStorage.setItem('desdem', JSON.stringify( desdem ));
    console.log(desdem);
  }
  // tslint:disable-next-line:typedef
  borrarMedico( id: string ) {
    let url = URL_SERVICIOS + 'medico/' + id;
    url += '?token=' + this._usuarioService.token;
    return this.http.delete( url )
          .map( resp => {
            console.log('Medico Borrado', 'Medico Borrado correctamente', 'success');
            return resp;
          });
}
// tslint:disable-next-line:typedef
  guardarMedico( medico: Medico) {
  let url = URL_SERVICIOS + 'medico';

  if (medico._id) {
    // actualizando
    url += '/' + medico._id;
    url += '?token=' + this._usuarioService.token;

    return this.http.put( url, medico )
          .map( (resp: any) => {
           console.log('Medico Actualizado', medico.nombre, 'success');
           return resp.medico;
          });

    } else {
      // creando
      url += '?token=' + this._usuarioService.token;
      return this.http.post( url, medico )
            .map((resp: any) => {
             console.log('Medico Creado', medico.nombre, 'success');
             return resp.medico;
            });
    }
}
// tslint:disable-next-line:typedef
  cargarMedicoid( id: string) {
    const url = URL_SERVICIOS + 'medico/' + id;
    return this.http.get( url )
          .map( (resp: any) => resp.medico);
}
// tslint:disable-next-line:typedef
  buscarMedicos( termino: string ) {
    const url = URL_SERVICIOS + 'busqueda/coleccion/medicos/' + termino;
    return this.http.get( url )
          .map((resp: any) => resp.medicos );
    }

}
