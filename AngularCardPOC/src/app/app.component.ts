import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  noWrapSlides = false;
  isDisney = false;
  isNfl = false;
  isUmd = false;
  regularCard = '../assets/citi-credit-card.jpg';
  pictureSrc = this.regularCard;
  selectedCard = this.regularCard;



  disneyPictures = [
    '../assets/disney/disney_1.png',
    '../assets/disney/disney_2.png',
    '../assets/disney/disney_3.png',
  ];

  nflPictures = [
    '../assets/nfl/nfl_1.png',
    '../assets/nfl/nfl_2.png',
    '../assets/nfl/nfl_3.png',
  ];

  umgPictures = [
    '../assets/umg/umg_1.png',
    '../assets/umg/umg_2.png',
    '../assets/umg/umg_3.png',
  ];

  disneyClick() {
    this.isDisney = true;
    this.isNfl = false;
    this.isUmd = false;
    this.pictureSrc = this.disneyPictures[0];
  }

  nflClick() {
    this.isDisney = false;
    this.isNfl = true;
    this.isUmd = false;
    this.pictureSrc = this.nflPictures[0];
  }

  umdClick() {
    this.isDisney = false;
    this.isNfl = false;
    this.isUmd = true;
    this.pictureSrc = this.umgPictures[0];
  }

  pictureSelect(category: string, index: number) {
    if (category == 'disney') {
      this.pictureSrc = this.disneyPictures[index];
      return;
    }

    if (category == 'nfl') {
      this.pictureSrc = this.nflPictures[index];
      return;
    }

    if (category== 'umg') {
      this.pictureSrc = this.umgPictures[index];
      return;
    }

    this.pictureSrc = this.regularCard;
  }

  onSelect(){
    this.selectedCard = this.pictureSrc;
  }
}
