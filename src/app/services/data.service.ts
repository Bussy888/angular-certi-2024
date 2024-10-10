import { Injectable } from '@angular/core';
import { data } from '../data';
import { UserData } from '../user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getData(): UserData[] {
    return Object.keys(data).map(key => data[key]);
  }
}