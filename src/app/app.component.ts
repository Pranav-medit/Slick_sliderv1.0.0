import { Component } from '@angular/core';
import { CardStyleInterface } from './slick/card.style.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SlickSlider';
  slides = [
    {
      img: 'https://picsum.photos/200',
      captionText: 'Apple',
      captionLink: 'https://apple.com'

    },
    {
      img: 'https://picsum.photos/230',
      captionText: 'You tube',
      captionLink: 'https://youtube.com'
    },
    {
      img: 'https://picsum.photos/300',
      captionText: 'Microsoft',
      captionLink: 'https://microsoft.com'
    },
    {
      img: 'https://picsum.photos/600',
      captionText: 'Blogger',
      captionLink: 'https://blogger.com'
    },
    {
      img: 'https://picsum.photos/seed/picsum/200/400',
      captionText: 'Linked In',
      captionLink: 'https://linkedin.com'
    },
    {
      img: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
      captionText: 'Mozilla',
      captionLink: 'https://mozilla.org'
    },
    {
      img: 'https://picsum.photos/200/300/?blur=2',
      captionText: 'Wikipedia',
      captionLink: 'https://en.wikipedia.org'
    },
    {
      img: 'https://picsum.photos/200/300/?blur',
      captionText: 'Google',
      captionLink: 'https://www.google.com'
    },
    {
      img: 'https://picsum.photos/200/300?grayscale',
      captionText: 'Cloudflare',
      captionLink: 'https://cloudflare.com'
    },
    {
      img: 'https://picsum.photos/id/237/100/300', captionText: 'Google Docs',
      captionLink: 'https://docs.google.com'
    }
  ];

  // Set property of each card
  cardStyle: CardStyleInterface = {
    width: 240,
    height: 400,
    borderRadius: 10,
    spaceBetweenCards: 10
  };
}
