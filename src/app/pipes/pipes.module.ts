import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherIconsPipe } from './weather-icons.pipe';

@NgModule({
    declarations: [WeatherIconsPipe],
    imports: [CommonModule],
    exports: [WeatherIconsPipe]
})
export class PipesModule {}
