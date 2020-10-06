import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService, ModalUploadService } from '../../services/service.index';

// import swal from 'sweetalert';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {


  usuarios: Usuario[] = [];
  desde = 0;

  salas;
  totalRegistros = 0;
  cargando = true;

  constructor(
    public usuarioservice: UsuarioService,
    public modaluploadservice: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this.cargarSalasTodas();
    this.modaluploadservice.notificacion
          .subscribe( resp => this.cargarUsuarios() );

  }


  cargarUsuarios() {
    this.usuarioservice.cargarUsuarios()
          .subscribe( (resp: any) => {
          this.totalRegistros = resp.total;
          this.usuarios = resp.usuarios;
          this.cargando = false;
    });
  }
  cargarSalasTodas() {
    this.usuarioservice.cargarSalasTodas()
    .subscribe( (resp: any) => {
    this.salas = resp.sala;
    this.cargando = false;
});
    console.log('salas Usuario.comp', this.salas);
  }

  buscarUsuario( termino: string) {
    if ( termino.length <= 0 ) {
      this.cargarUsuarios();
      return;
    }
    this.cargando = true;

    this.usuarioservice.buscarUsuarios( termino )
              .subscribe((usuarios: Usuario[]) => {
                this.usuarios = usuarios;
                this.cargando = false;
              });
  }


  guardarUsuario( usuario: Usuario) {
      this.usuarioservice.actualizarUsuario( usuario )
            .subscribe();
  }


  borrarUsuario( usuario: Usuario) {
    if ( usuario._id === this.usuarioservice.usuario._id) {
     console.log('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
     return;
    }
    console.log(
     '¿Esta seguro?',
    'Esta a punto de borrar a ' + usuario.nombre,
    'warning'
    // buttons: true,
    //   dangerMode: true
    );
    // .then (borrar => {
    //   console.log( borrar );
    //   if ( borrar ) {
    //   this.usuarioservice.borrarUsuario( usuario._id)
    //         .subscribe( borrado => {
    //           console.log( borrado );
    //           this.cargarUsuarios();
    //         });
    //   }
    // });
  }



  mostrarModal( id: string) {
    this.modaluploadservice.mostrarModal( 'usuarios', id );
  }



  cambiarDesde(valor: number ) {

    const desdeu = JSON.parse( localStorage.getItem('desdeu')) + valor;

    if ( desdeu >= this.totalRegistros) {
      return;
    }
    if (desdeu < 0) {
      return;
    }

    this.usuarioservice.guardardesdeStorage( desdeu );
    this.cargarUsuarios();
  }

}
