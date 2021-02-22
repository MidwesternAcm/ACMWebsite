import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Reference to the first element matching the selector
  @ViewChild('slides') slideElement: IonSlides;

  index: number;

  constructor(
  ) {
    this.index = 0;
  }

  ionViewWillEnter() {
    setInterval(() => {
      this.index = (this.index + 1) % 5;
      this.slideElement.slideTo(this.index);
    }, 4000)
  }

  ionViewWillLeave() {
  }

}
