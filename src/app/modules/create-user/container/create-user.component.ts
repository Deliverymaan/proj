import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateUserService } from '../api/create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private _post: CreateUserService) {}

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
      // password: new FormControl(null, [
      //   Validators.required,
      //   Validators.pattern(
      //     '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}'
      //   ),
      // ]),
      // address: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
    });
    this.onSubmit();
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Valid');
      // this.userForm.reset();
      this._post
        .createUser(this.userForm.value)
        .subscribe((result: any) => console.log(result));
    } else {
      console.log('Invalid');
    }
  }
}
