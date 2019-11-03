import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../interfaces/interfaces';

const apiKey = '';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient) {}

    public getForecastNow<Forecast>(lat: string, lon: string) {
        const query = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&lat=${lat}&lon=${lon}`;
        return this.http.get<Forecast>(query);
    }
}
