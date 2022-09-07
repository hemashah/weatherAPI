import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent implements OnInit {
  @Input() temp: any;
  @Input() date: any;
  @Input() forecast: any;
  constructor() {}

  ngOnInit(): void {}
}
