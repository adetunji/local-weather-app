import { browser } from 'protractor';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import 'hammerjs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { CitySearchComponent } from './city-search/city-search.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service';
import { MaterialModule } from './/material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, CitySearchComponent],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
