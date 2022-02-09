import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FbAuthResponse, User} from "../../../shared/interface";
import {catchError, Observable, ObservableInput, Subject, tap, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient,

  ) {}

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
        tap<FbAuthResponse>(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse): ObservableInput<any>{
    const { message } = error.error.error;

    switch(message) {
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email не найден')
        break;
      default:
        this.error$.next('Неизвестная ошибка')
        break;
    }

    return throwError(() => error);
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
