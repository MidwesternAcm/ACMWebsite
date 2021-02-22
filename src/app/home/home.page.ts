import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imagePanelSource1: string = "assets/images/picpanel01.jpg";
  imagePanelSource2: string = "assets/images/picpanel02.jpg";
  imagePanelCounter: number = 1;
  firstPanel: boolean = false;
  @ViewChild('pic1') picFrame1: HTMLImageElement;
  @ViewChild('pic2') picFrame2: HTMLImageElement;
  intervalRefernce;

  constructor(
  ) { }

  ionViewWillEnter() {
  }

  ionViewWillLeave() {
  }

}
