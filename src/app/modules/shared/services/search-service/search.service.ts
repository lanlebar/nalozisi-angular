import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { urlConst } from '../../enums/url.enum';
import { TokenService } from '../token-service/token.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService,
    private readonly tokenService: TokenService
  ) {}

  private readonly token = this.tokenService.getToken();

  searchTorrents(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`${urlConst.apiBase}/search?Query=${query}`, {headers: headers}).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        if (error.status === 401) {
          this.authService.unauthorizedHandler();
          return;
        }
        return error;
      })
    );
  }
}
