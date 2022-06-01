import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss'],
})
export class UserBoxComponent implements OnInit {
  @Input() user!: UserModel;
  constructor() {}

  ngOnInit(): void {}
}
