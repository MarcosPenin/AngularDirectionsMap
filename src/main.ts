import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY29zcGVuaW4iLCJhIjoiY2w5aDNsNjdtMHk2cDNwbzAyaHc2NDVxZCJ9.hS6P5cC1f5fP83aF5p8SXA';


if(!navigator.geolocation){
  alert ("Browser doesn't support geolocation")
  throw new Error ("Browser doesn't support geolocation")
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
