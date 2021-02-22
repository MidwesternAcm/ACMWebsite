import { Component, Input, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-pimg',
    templateUrl: './pimg.component.html',
    styleUrls: ['./pimg.component.scss']
})
export class PimgComponent {

    // Inputs, variables from HTML parent
    @Input() text: string = ""; // Text to store inside of <p>
    @Input() src: string = ""; // src property to pass along to <img>
    @Input() flip: boolean = false; // when horizontal, flip order; default is <img><p>, flipped is <p><img>

    // Whether or not the image and p tag should be stacked
    public stacked: boolean;

    constructor(private platform: Platform) {
        this.stacked = this.platform.width() / this.platform.height() < 3 / 4;
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        // Checks whether the elements should be stacked together
        this.stacked = this.platform.width() / this.platform.height() < 3 / 4;
    }

}
