import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(
    public router: Router,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  //I did it this way so the standard animation could be easily removed where in using routerLink= did not
  nav(pageKey: string){
    this.navCtrl.navigateForward(pageKey,{animated: false});
  }
}
