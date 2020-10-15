import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding } from '@ionic/angular';
// import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

/* Import all of the required Google Maps entities from the google-maps package */
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from "@ionic/angular";

import { ActivatedRoute } from '@angular/router';

declare var google;
let latitude;
let lngtitude;
@Component({
  selector: 'app-map-locations',
  templateUrl: './map-locations.page.html',
  styleUrls: ['./map-locations.page.scss'],
})

export class MapLocationsPage {
  lat: any;
  lng: any;

  constructor(public platform: Platform, private geolocation: Geolocation, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.lat = parseFloat(params['lat']);
      this.lng = parseFloat(params['lng']);

      console.log(`${this.lat},${this.lng}`);
    });
  }


  /* Only instantiate the map AFTER the view is initialized and the DOM is accessible */
  ngAfterViewInit() {
    this.platform.ready().then(() => this.loadMap());
  }

  //loading google map
  loadMap() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {


    });

    this.geolocation.getCurrentPosition().then((resp) => {  //taking current position
      console.log('$$')
      latitude = resp.coords.latitude;
      lngtitude = resp.coords.longitude;

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: latitude, lng: lngtitude }
      });
      var myLatLng = new google.maps.LatLng({ lat: latitude, lng: lngtitude });
      var destLatLng = new google.maps.LatLng({ lat: this.lat, lng: this.lng });
      console.log('LT: ' + latitude + ' LD: ' + lngtitude + ' MYLATLNG: ' + myLatLng + ' DESTLATLNG: ' + destLatLng);
      var directionsService = new google.maps.DirectionsService();
      var directionsRenderer = new google.maps.DirectionsRenderer();

      //creating route in google map
      directionsRenderer.setMap(map);
      directionsService.route(
        {
          origin: myLatLng,
          destination: destLatLng,
          travelMode: 'DRIVING'
        },
        function (response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });

    }).catch((error) => {
      console.log('Error getting location', error);
    });




  }



}
