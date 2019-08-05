import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
  apiKey: string = '935e76a79eec45562a03dee11b37a377';
  cityId: number = 3477;
  url;
  state;
  city;
  getId;

  constructor(public http: Http) {
  }

  getWeather(city, state){
    // this.http.get('http://apiadvisor.climatempo.com.br/api/v1/locale/city?name='+city+'&state='+state+'&token='+this.apiKey+'')
    //   .subscribe(getID => {
    //     console.log(getID);
    //     this.getId = getID
    //   })
        
    this.http.get('http://apiadvisor.climatempo.com.br/api/v1/weather/locale/'+this.cityId+'/current?token='+this.apiKey+'')
    .subscribe(weather =>{
      console.log(weather)        
      })

      
  }
}
