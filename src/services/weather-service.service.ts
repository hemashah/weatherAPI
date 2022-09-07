import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  constructor(private http: HttpClient) {}
  getWeather() {
    return this.http.get(
      'https://mighty-badlands-80674.herokuapp.com/weather/getWeather'
    );
  }
}
