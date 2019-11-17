import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { IPositionsResponse } from '@app/interfaces/responses.interface';
import { IPosition } from '@app/interfaces/position.interface';

@Injectable({
 providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1';

  constructor(private http: HttpClient) { }

  positionsData$ = new BehaviorSubject<IPosition[]>(null);

  fetchPositions(): void {
    this.http.get<IPositionsResponse>(`${this.apiUrl}/positions`)
      .subscribe(
        (res: IPositionsResponse) => {
          this.positionsData$.next(res.positions);
        },
        err => {
          console.log('positions data do not fetched', err);
        }
      );
  };

  getToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/token`);
  }

  uploadUser(userData, token, file): Observable<any> {
    let headers = new HttpHeaders().set('Token', token);

    const fd = new FormData();
    fd.append('name', userData.name);
    fd.append('email', userData.email);
    fd.append('phone', userData.phone);
    fd.append('position_id', userData.position_id);
    fd.append('photo', file);
    
    return this.http.post(`${this.apiUrl}/users`, fd, { headers: headers})
  }
}