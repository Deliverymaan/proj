import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  public loader = false;
  constructor(
    private _load: LoaderService,
    private _detect: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.onStart();
  }

  onStart() {
    this._load.getLoader().subscribe((result: string) => {
      this.loader = result === 'start';
      this._detect.detectChanges();
      console.log(this.loader);
    });
  }
}
