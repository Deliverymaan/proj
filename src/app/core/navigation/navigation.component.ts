import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onAdd() {
    this._router.navigate(['/create-user']);
  }
  onEmployee() {
    this._router.navigate(['/users']);
  }

  onHome() {
    this._router.navigate(['/home']);
  }
}
