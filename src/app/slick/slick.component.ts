import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CardStyleInterface } from './card.style.interface';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.scss']
})
export class SlickComponent implements OnInit {
  // Slide Data
  @Input() slides: any;

  // Slide Styles
  @Input() cardStyle: any;

  // Screen width(viewport width)
  scrWidth = 0;

  // Number of slides to show or scroll
  slidesToShow = 0;

  // Total card width including margin
  totCardWidth = 0;
  slideConfig: any;

  // Determine screen width(width of viewport)
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any): void {
    this.totCardWidth = this.cardStyle.width + (this.cardStyle.spaceBetweenCards);
    if (window.innerWidth === (this.totCardWidth) * 2) {
      this.scrWidth = window.innerWidth / 2;
    } else {
      this.scrWidth = window.innerWidth;
    }
    console.log(this.scrWidth, this.totCardWidth);
    this.adjustSlidesPerScreenWidth();
  }
  // Hey coder see below function title
  adjustSlidesPerScreenWidth(): void {
    this.slidesToShow = Math.floor(this.scrWidth / this.totCardWidth);
    this.slideConfig = {
      slidesToShow: this.slidesToShow,
      slidesToScroll: this.slidesToShow,
      autoplay: true,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: true,
      autoplaySpeed: 3000
    };

  }
  // Constructor
  // constructor() {
  //   this.getScreenSize();
  // }
  ngOnInit(): void {
    this.getScreenSize();
    this.adjustSlidesPerScreenWidth();
  }

}
