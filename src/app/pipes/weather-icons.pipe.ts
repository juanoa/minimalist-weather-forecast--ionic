import { Pipe, PipeTransform } from '@angular/core';

const url = 'http://openweathermap.org/img/wn/';

@Pipe({
    name: 'weatherIcons'
})
export class WeatherIconsPipe implements PipeTransform {
    transform(imagen: string, size: string = '@2x.png'): string {
        if (!imagen) {
            return `${url}02d${size}`;
        }

        const imgUrl = `${url}${imagen}${size}`;
        return imgUrl;
    }
}
