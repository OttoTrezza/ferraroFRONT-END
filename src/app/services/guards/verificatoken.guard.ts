import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class VerificatokenGuard implements CanActivate {

  constructor(
    public usuarioservice: UsuarioService,
    public router: Router
  ) { }
  canActivate(): Promise<boolean> | boolean {
    console.log('Token Guard');

    const token = this.usuarioservice.token;
    const payload = JSON.parse( atob( token.split('.')[1]) );

    const expirado = this.expirado( payload.exp);

    if ( expirado ) {
      this.router.navigate(['login']);
      return false;
    }

    return this.verificaRenueva( payload.exp );
  }
  verificaRenueva( fechaExp: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const tokenExp = new Date (fechaExp * 1000);
      const ahora = new Date();

      ahora.setTime( ahora.getTime() + (1 * 60 * 60 * 1000) );

      // console.log(tokenExp);
      // console.log(ahora);

      if (tokenExp.getTime() > ahora.getTime() ) {
        resolve(true);
      } else {
        this.usuarioservice.renuevaToken()
                .subscribe( () => {
                  resolve(true);
                }, () => {
                  reject(false);
                  this.router.navigate(['login']);

                });
        }
    });
  }


  expirado( fechaExp: number ) {
    const ahora = new Date().getTime() / 1000;
    if (fechaExp < ahora ) {
        return true;
      } else {
        return false;
        }
  }
}
