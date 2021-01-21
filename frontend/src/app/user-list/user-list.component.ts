import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  displayedColumns = ['pictures', 'username', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'date_joined', 'edit', 'delete'];

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  private retrieveUsers(): void {
    this.userService.getUsers()
      .subscribe((users) => {
        this.users = users;

      });
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe(() => {
      this.retrieveUsers();
      alert('User deleted successfully!');
    });
  }


}
