import { Component } from '@angular/core';
import { WeatherServiceService } from 'src/services/weather-service.service';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list = [];
  data: any;
  city = '';

  today = moment().format('YYYY-MM-DD');
  day2 = moment().add(1, 'days').format('YYYY-MM-DD');
  day3 = moment().add(2, 'days').format('YYYY-MM-DD');
  day4 = moment().add(3, 'days').format('YYYY-MM-DD');
  day5 = moment().add(4, 'days').format('YYYY-MM-DD');

  todayFormatted = moment().format('ddd MMM DD YYYY');
  day2Formatted = moment().add(1, 'days').format('ddd MMM DD YYYY');
  day3Formatted = moment().add(2, 'days').format('ddd MMM DD YYYY');
  day4Formatted = moment().add(3, 'days').format('ddd MMM DD YYYY');
  day5Formatted = moment().add(4, 'days').format('ddd MMM DD YYYY');

  weatherTodayall = [];
  weatherDay2all = [];
  weatherDay3all = [];
  weatherDay4all = [];
  weatherDay5all = [];

  forecastToday = [];
  forecast2 = [];
  forecast3 = [];
  forecast4 = [];
  forecast5 = [];

  weatherToday: any;
  weatherDay2: any;
  weatherDay3: any;
  weatherDay4: any;
  weatherDay5: any;

  loading: boolean = true;

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe((response) => {
      this.data = response['data'];
      this.city = this.data.city.name;
      this.list = this.data.list;
      this.loading = false;
    });
  }

  ngDoCheck() {
    this.list.forEach((item) => {
      if (item.dt_txt.includes(this.today)) {
        this.weatherTodayall.push(item.main.temp);
        this.forecastToday.push(item.weather[0].description);
      } else if (item.dt_txt.includes(this.day2)) {
        this.weatherDay2all.push(item.main.temp);
        this.forecast2.push(item.weather[0].description);
      } else if (item.dt_txt.includes(this.day3)) {
        this.weatherDay3all.push(item.main.temp);
        this.forecast3.push(item.weather[0].description);
      } else if (item.dt_txt.includes(this.day4)) {
        this.weatherDay4all.push(item.main.temp);
        this.forecast4.push(item.weather[0].description);
      } else if (item.dt_txt.includes(this.day5)) {
        this.weatherDay5all.push(item.main.temp);
        this.forecast5.push(item.weather[0].description);
      }
    });
    this.weatherToday = Math.round(
      (this.weatherToday =
        this.weatherTodayall.reduce((a, b) => a + b, 0) /
        this.weatherTodayall.length)
    );
    this.weatherDay2 = Math.round(
      this.weatherDay2all.reduce((a, b) => a + b, 0) /
        this.weatherDay2all.length
    );
    this.weatherDay3 = Math.round(
      this.weatherDay3all.reduce((a, b) => a + b, 0) /
        this.weatherDay3all.length
    );
    this.weatherDay4 = Math.round(
      this.weatherDay4all.reduce((a, b) => a + b, 0) /
        this.weatherDay4all.length
    );
    this.weatherDay5 = Math.round(
      this.weatherDay5all.reduce((a, b) => a + b, 0) /
        this.weatherDay5all.length
    );

    // console.log('day1', this.weatherToday);
    // console.log('day2', this.weatherDay2);
    // console.log('day3', this.weatherDay3);
    // console.log('day4', this.weatherDay4);
    // console.log('day5', this.weatherDay5);
  }
}
