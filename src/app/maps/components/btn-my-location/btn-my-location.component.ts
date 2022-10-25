import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private placesService: PlacesService, private mapService: MapService) { }

  goToMyLocation() {

    if ( !this.placesService.isUserLocationReady ) throw Error('There is no location available');
    if ( !this.mapService.isMapReady ) throw Error('There is no map available');
    
    
    this.mapService.flyTo( this.placesService.useLocation! );

  }
}
