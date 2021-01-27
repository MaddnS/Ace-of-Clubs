import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../services/user.service';
import {Router} from "@angular/router";
import {CdkTableExporterModule} from "cdk-table-exporter";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent extends CdkTableExporterModule implements OnInit {

  users: User[];
  displayedColumns = ['pictures', 'username', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'edit', 'delete'];
  search: '';

  constructor(public userService: UserService, private route: Router) {
    super();
  }

  ngOnInit(): void {
    this.retrieveUsers();
    //console.log(this.userService.currentUserPK)
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

  searchCustom(str: string): void {
    this.userService.searchUserCustom(str).subscribe((users) => {
      this.users = users;
      this.route.navigateByUrl('/user-list');
    });
  }

}
