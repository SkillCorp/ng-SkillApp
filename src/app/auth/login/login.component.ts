import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

import { LoginService } from './login.service';
import { contentHeaders } from '../headers';

const styles = require('./login.style.css');
const template = require('./login.template.html');

@Component({
  selector: 'login',
  providers: [LoginService],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: template,
  styles: [styles]
})
export class Login {
  constructor(public router: Router, public loginService: LoginService) { }

  login(event, username, password) {
    event.preventDefault();
    this.loginService.doLogin(username, password)
      .subscribe(
      response => {
        localStorage.setItem('id_token', response.access_token);
        this.router.navigate(['/home']);
      },
      error => {
        alert(error.text());
      });
  }
}
