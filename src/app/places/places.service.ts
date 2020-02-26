import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [ 
    new Place(
      'p1', 
      'Manhattan Mansion', 
      'In the heart of New York', 
      'https://wallpaperaccess.com/full/1736660.jpg', 
      130.99
      ),
    new Place(
      'p2', 
      'L\'Amour Toujours', 
      'A romantic place in Paris', 
      'https://miro.medium.com/max/4096/1*t-nXIcaD3oP6CS4ydXV1xw.jpeg', 
      99.99
      ),
    new Place(
      'p3', 
      'The Foggy Palace', 
      'Not your average city trip', 
      'https://i.pinimg.com/originals/65/8f/77/658f77b9b527f89922ba996560a3e2b0.jpg', 
      189.99
      )
  
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
