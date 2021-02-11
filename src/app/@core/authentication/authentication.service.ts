import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CredentialsService } from './credentials.service';
import { LoginContext, RegisterContext, AuthorizationEntity } from './authentication.models';
import { ApiService } from '../api/api.service';
import { Auth } from '../models/auth.model';

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn: boolean;
  auth = {} as Auth

  get isAuthenticated() {
    return this.loggedIn;
  }

  constructor(
    private credentialsService: CredentialsService,
    private api: ApiService,
  ) { }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */



  login(context: LoginContext): Observable<AuthorizationEntity> {

    const dataRequest = {
      email: context.username,
      password: context.password
    };

    let data: AuthorizationEntity = {
      username: context.username,
      accessToken: '',
      fullName: '',
      admin: true,
      authorized: false,
      email: context.username,
      expiresIn: 1,
      newUser: false,
    };

    this.api.post<Auth>("/login", Auth, dataRequest).subscribe((response: Auth) => {
      data.accessToken = response.token
      data.authorized = true
    })
    if (data.accessToken != '') {
      this.loggedIn = true;
    }



    this.credentialsService.setCredentials(data, context.remember);
    return of(data);


    // this.apiService.query('/login', null, 'get', { context }).then(response => {
    //   console.log(response);

    //   if (response) {
    //     this.loggedIn = true;

    //     // Replace by proper authentication call
    //     const data: AuthorizationEntity = {
    //       username: context.username,
    //       accessToken: '123456',
    //       fullName: '',
    //       admin: true,
    //       authorized: true,
    //       email: '',
    //       expiresIn: 1,
    //       newUser: false,
    //     };
    //     this.credentialsService.setCredentials(data, context.remember);
    //     return of(data);
    //   } else {

    //   }
    // });
  }

  /**
   * Registers the user.
   * @param context The register parameters.
   * @return The user credentials.
   */
  register(context: RegisterContext): Observable<AuthorizationEntity> {
    // Replace by proper registration call
    const data: AuthorizationEntity = {
      username: context.username,
      accessToken: '654321',
      fullName: '',
      admin: true,
      authorized: true,
      email: '',
      expiresIn: 1,
      newUser: false,
    };

    return of(data);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
