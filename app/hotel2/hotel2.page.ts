import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hotel2',
  templateUrl: './hotel2.page.html',
  styleUrls: ['./hotel2.page.scss'],
})
export class Hotel2Page {


  weatherObjc = {
    temperature: 0,
    description: '',
    picture: ''
  };

  city: string = "Dubrovnik";

  constructor(private theInAppBrowser: InAppBrowser, private _http: HttpClient) { }


  ngOnInit() {

  }

  ionViewDidEnter() {
    this.showWeather();
  }

  //method to open in app browser
  public openWithInAppBrowser(url: string) {
    let target = "_blank";
    this.theInAppBrowser.create(url, target, 'location=yes');  //url, '_blank', 'location=yes'
  }
  //method to open app in cordova browser
  public openWithCordovaBrowser(url: string) {
    let target = "_self";
    this.theInAppBrowser.create(url, target, 'location=yes');
  }
  //method to show current weather
  showWeather() {
    this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=yourID" + "&units=metric" + "&lang=en")
      .subscribe((data) => {
        console.log(data);
        this.weatherObjc.temperature = Math.round(data['main']['temp']);
        this.weatherObjc.description = data['weather'][0]['description'];
        this.weatherObjc.picture = 'http://openweathermap.org/img/w/' + data['weather'][0]['icon'] + ".png";
        console.log(this.weatherObjc);
      });
  }

}
