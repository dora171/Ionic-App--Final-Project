import {Component, OnInit} from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';

declare var cordova:any;
@Component({
    selector: 'app-archived',
    templateUrl: './archived.page.html',
    styleUrls: ['./archived.page.scss'],
})
export class ArchivedPage{ // implements OnInit 
    
    weatherObjc = {
        temperature: 0,
        description: '',
        picture: ''
    };

        city: string = "Dubrovnik";
    

    constructor(private theInAppBrowser: InAppBrowser, private _http: HttpClient) { }

   
    ngOnInit() {
        
    }
    ionViewDidEnter(){
        this.showWeather();
      }
   
    /**
     * method to open app in browser
     * @param url 
     */
    public openWithInAppBrowser(url : string){
        let target = "_blank";
        this.theInAppBrowser.create(url, target, 'location=yes');  //url, '_blank', 'location=yes'
    }
     /**
     * method to open app in cordova browser
     * @param url 
     */
    public openWithCordovaBrowser(url : string){
        let target = "_self";
        this.theInAppBrowser.create(url,target,'location=yes');
    }  

    /**
     * method to show weather
     */
    showWeather(){
        this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=yourID"  + "&units=metric" + "&lang=en")
        .subscribe((data) => {
            console.log(data);
            this.weatherObjc.temperature = Math.round(data['main']['temp']);
            this.weatherObjc.description = data['weather'][0]['description'];
            this.weatherObjc.picture = 'http://openweathermap.org/img/w/' + data['weather'][0]['icon'] + ".png";
            console.log(this.weatherObjc);
        });
      }
     
    }