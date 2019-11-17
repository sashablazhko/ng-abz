import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IUser } from '@app/interfaces/user.interface';
import { IUserResponse, IUsersResponse } from '@app/interfaces/responses.interface';

@Injectable({
 providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1';

  constructor(private http: HttpClient) { }

  userData$ = new BehaviorSubject<IUser>(null);
  usersData$ = new BehaviorSubject<IUser[]>([]);
  totalUsers$ = new BehaviorSubject<number>(null); 

  fetchUser(): void {
    this.http.get<IUserResponse>(`${this.apiUrl}/users/1`)
      .subscribe(
        (res: IUserResponse) => {
          this.userData$.next(res.user);
        },
        err => {
          console.log('user data do not fetched', err);
        }
      );
  };

  fetchUsers(amount: number): void {
    this.http.get<IUsersResponse>(`${this.apiUrl}/users?page=1&count=${amount}`)
      .subscribe(
        (res: IUsersResponse) => {
          this.usersData$.next(res.users);
          this.totalUsers$.next(res.total_users);
        },
        err => {
          console.log('users data do not fetched', err);
        }
      );
  };
}