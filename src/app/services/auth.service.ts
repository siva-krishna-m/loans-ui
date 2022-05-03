import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { loginForm } from '../auth/models/user.model';

@Injectable()
export class AuthService {

constructor(private http: HttpClient) { }

login(req: any){
  return this.http.get(environment.USER_BASE_URL+environment.USER.ADD_USER, {...req})
}

}
