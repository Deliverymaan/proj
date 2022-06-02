import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private _router: Router) {}
  @ViewChild('nav', { static: true }) nav!: ElementRef;

  ngOnInit(): void {
    console.log(this.nav);
  }

  onEmployee() {
    this._router.navigate(['/users']);
  }

  onHome() {
    this._router.navigate(['/home']);
  }

  onButton() {
    this.nav.nativeElement.classList.toggle('active');
  }
}
