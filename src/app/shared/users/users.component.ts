import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/user.service';
import { IUser } from '@app/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersData: IUser[];
  usersCount: number = 6;
  usersTotal: number;

  constructor(
    private userService: UserService
  ) { }

  showMoreUsers() {
    this.usersCount += 6;
    this.userService.fetchUsers(this.usersCount);
  }

  ngOnInit() {
    this.userService.fetchUsers(this.usersCount);

    this.userService.usersData$
      .subscribe(
        (users: IUser[]) => {
          if (users) {
            this.usersData = users;
            console.log('', );
          }
        },
        err => {
          console.log('err', err);
        }
      );

    this.userService.totalUsers$
      .subscribe(
        (total: number) => {
          if (total) {
            this.usersTotal = total;
          }
        },
        err => {
          console.log('err', err);
        }
      ); 
  }

}
