import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  ionViewDidEnter() {
    this.loadmap();
  }

/**  Estos no muestran la geo-lolizacion, solo muestran el mapa

  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    /**
      attributions: 'www.tphangout.com',
      maxZoom: 18
    }).addTo(this.map);
    
    
    Estos no muestran la geo-lolizacion, solo muestran el mapa

    attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
    setView: true,
    maxZoom: 10
    }).on('locationfound', (e) => {
    console.log('found you');
    })

  }  
  **/

 loadmap() {
  this.map = leaflet.map("map").fitWorld();
  leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
  }).addTo(this.map);
  this.map.locate({
    setView: true,
    maxZoom: 10
  }).on('locationfound', (e) => {
    console.log('Latitud; ' + e.latitude);
    console.log('Longitud; ' + e.longitude);
    let markerGroup = leaflet.featureGroup();
    let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
      alert('Marker clicked');
    })
    markerGroup.addLayer(marker);
    this.map.addLayer(markerGroup);
    }).on('locationerror', (err) => {
      alert(err.message);
  })

  }  

}
