import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'app/shared/loader/service/loader.service';
import { NotificationType } from 'app/shared/notifications/models/notification-type.enum';
import { NotificationFacade } from 'app/shared/notifications/notification.facade';
import { NotificationState } from 'app/shared/notifications/state/notification.state';
import { CreateUserService } from '../api/create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userForm!: FormGroup;
  result!: any;
  constructor(
    private _post: CreateUserService,
    private _loadServ: LoaderService,
    private _state: NotificationState
  ) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(undefined, [
        Validators.required,
        Validators.pattern('^[a-z]*$'),
        Validators.minLength(4),
      ]),
      id: new FormControl(undefined, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      gender: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Valid');
      this._post.createUser(this.userForm.value).subscribe({
        next: (result: any) => {
          this.result = result.status;
          if (this.result === 201) {
            console.log(this.result);
            this._state.notifySuccess('Success', this.result);
          }
        },
        error: (err) => {
          this._loadServ.stopApi();
          console.log(err.status);
          this._state.notifyError('Error', err.status);
        },
      });
      // this.userForm.reset();
    } else {
      console.log('Invalid');
    }
  }
}
