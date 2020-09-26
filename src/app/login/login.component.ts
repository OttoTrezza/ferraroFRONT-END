import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';


declare function init_plugins();

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame = false;
  auth2: any;

  constructor(
    public router: Router,
    public usuarioservice: UsuarioService,
    // tslint:disable-next-line:variable-name
   // public _chatService: ChatService,
    // tslint:disable-next-line:variable-name
   // public _wsService: WebsocketService
  ) { }

  ngOnInit() {
    //  init_plugins();

    // this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1) {
      this.recuerdame = true;
    }
  }
// googleInit() {

// gapi.load('auth2', () => {


//   this.auth2 = gapi.auth2.init({
//     client_id: '584414601747-ve69u1oukn9kq53u3den4hm8f986jcsc.apps.googleusercontent.com',
//     cookiepolicy: 'single_host_origin',
//     scope: 'profile email'
//   });
//   this.attachSignin(document.getElementById('btnGoogle'));
// });

// }
attachSignin( element ) {

  this.auth2.attachClickHandler( element, {}, (googleUser) => {

  // let profile = googleUser.getBasicProfile();
  const token = googleUser.getAuthResponse().id_token;
  // console.log(this._usuarioService.loginGoogle( token ));
  this.usuarioservice.loginGoogle( token )
              .subscribe( () => window.location.href = '/*/dashboard' );

 });
}

  ingresar(forma: NgForm) {
    if ( forma.invalid) {
      console.log('forma', forma);
      return;
    }
    const usuario = new Usuario(null, forma.value.email, forma.value.password);
    console.log('entramos');
    this.usuarioservice.login(usuario, forma.value.recuerdame)
    .subscribe( correcto => {
      console.log('entramos1', correcto);
      this.router.navigate(['/*/artista1']);
    });
  }

}
