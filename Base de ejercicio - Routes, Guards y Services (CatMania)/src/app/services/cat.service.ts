import { Injectable } from '@angular/core';
import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  readonly baseUrl = 'https://api.thecatapi.com/v1/images/search';
  readonly apiKey = '';

  getCats(amount?: number) {
    let url: string = this.baseUrl;

    if(amount) {
      url += '?' + this.apiKey + '&limit' + amount;
    }
    
    return this.http.get<Cat[]>(url);
  }
}
