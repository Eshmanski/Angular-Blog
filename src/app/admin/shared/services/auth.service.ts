import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {FbAuthResponse, User} from "../../../shared/interface";
import {Observable, tap} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable()
export class AuthService {
  // token: string = '';

  constructor(private http: HttpClient) {
  }

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp') || '');

    if(new Date() > expDate) {
      this.logout();
      return '';
    }

    return localStorage.getItem('fb-token') || '';
  }

  login(user: User): Observable<FbAuthResponse> {
    user.returnSecureToken = true;

    return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap<FbAuthResponse>(this.setToken)
      );
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(res: FbAuthResponse | null): void {
    if(res) {
      const expDate = new Date(+res.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem('fb-token', res.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }

  }
}
