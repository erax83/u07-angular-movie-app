import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbservService {

  constructor( ) { }

  printToConsole() {
    console.log('its wörkäng!');
  }
 
}
