import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListService } from '../../api/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(
    private _userListService: UserListService,
    private _router: Router
  ) {}
  users: any[] = [];

  ngOnInit(): void {
    this.logUserList();
  }

  logUserList() {
    this._userListService
      .getUserList()
      .subscribe(
        (result: any) => ((this.users = result), console.log(this.users))
      );
  }

  onAdd() {
    this._router.navigate(['/create-user']);
  }
}
