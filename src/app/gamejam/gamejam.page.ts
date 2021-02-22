import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gamejam',
  templateUrl: './gamejam.page.html',
  styleUrls: ['./gamejam.page.scss'],
})
export class GamejamPage implements OnInit {

  public openIdlePixels: boolean;
  public openCaveGame: boolean;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.openIdlePixels = false;
    this.openCaveGame = false;
  }

  ngOnInit() {
  }

  sanitizePath(pathName) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(pathName);
  }

}
