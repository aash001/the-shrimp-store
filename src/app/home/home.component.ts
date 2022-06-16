import { Component, OnInit } from '@angular/core';
import { ShrimpService } from '../shrimp.service';
import { apiKeyConfig } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private shrimpService: ShrimpService) {}

  WeatherData: any;
  data: any;

  apiKeyConfig = {
    weatherApiKey:
      'https://api.openweathermap.org/data/2.5/weather?lat=28.162519&lon=-81.594070&appid=1396f5a526e4122d38e8f04ee388707e&units=imperial',
  };

  weatherApiKey = apiKeyConfig.weatherApiKey;

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true,
    };
    this.getWeatherData();
  }

  getWeatherData() {
    fetch(this.weatherApiKey)
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
      });
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.WeatherData.temp = this.WeatherData.main.temp.toFixed(0);
    this.WeatherData.temp_min = this.WeatherData.main.temp_min.toFixed(0);
    this.WeatherData.temp_max = this.WeatherData.main.temp_max.toFixed(0);
    this.WeatherData.temp_feels_like =
      this.WeatherData.main.feels_like.toFixed(0);
  }
}
