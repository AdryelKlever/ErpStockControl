import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from 'src/app/models/interfaces/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/auth/AuthResponse';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SingnupUserRequest';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SingnupUserResponse';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environments.API_URL;

  constructor(private http: HttpClient) { }

  signupUser(requestData: SignupUserRequest) : Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`, requestData
    );
  }

  authUser(requestData: AuthRequest) : Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.API_URL}/auth`, requestData
    );
  }
}
