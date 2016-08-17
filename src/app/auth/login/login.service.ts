import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { LoginResponse } from './login-response';
import { contentHeaders } from '../headers';

@Injectable()
export class LoginService {
  private jwtUrl: string = 'http://localhost:5000/api/jwt';
  constructor(public http: Http) { }

  doLogin(username: string, password: string): Observable<LoginResponse> {
    var body = { UserName: username, Password: password };
    return this.http.post(this.jwtUrl, body, { headers: contentHeaders })
      .map((response: Response) => <LoginResponse>response.json());
  }
}
