import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  user: string

  constructor(private router: Router, private emailcomposer: EmailComposer) { }

  ngOnInit() {
    
  }
  recuperar(){
    let email = {
      to: this.user+'@duocuc.cl',
      subject: 'Recuperar contraseña',
      body: 'Tu contraseña es : 123456',
      isHtml: true
    };
    this.emailcomposer.open(email);
    this.router.navigate(['/home'])
  }

}
