export class UIDecoration{
    constructor(id, hour=''){
        this.id=parseInt(id);
        this.hour=parseInt(hour.split(':')[0])
    }
    icon(){
        if (this.id >= 200 && this.id < 300) {
            return 'https://openweathermap.org/img/wn/11d@2x.png'
        } else if ((this.id >= 300 && this.id < 400) ||(this.id >= 520 && this.id < 600)) {
            return 'https://openweathermap.org/img/wn/09d@2x.png'
        } else if (this.id >= 500 && this.id <=504) {
            return 'https://openweathermap.org/img/wn/10d@2x.png'
        } else if ((this.id >= 600 && this.id < 700)|| this.id===511) {
            return 'https://openweathermap.org/img/wn/13d@2x.png'
        } else if (this.id >= 700 && this.id < 800) {
            return 'https://openweathermap.org/img/wn/50d@2x.png'
        } else if (this.id===800) {
            if(this.hour>=6 && this.hour<=18){
                return 'https://openweathermap.org/img/wn/01d@2x.png'
            }else{
                return 'https://openweathermap.org/img/wn/01n@2x.png'
            }
        } else if (this.id===801) {
            if(this.hour>=6 && this.hour<=18){
                return 'https://openweathermap.org/img/wn/02d@2x.png'
            }else{
                return 'https://openweathermap.org/img/wn/02n@2x.png'
            }
        }else if (this.id===802) {
            if(this.hour>=6 && this.hour<=18){
                return 'https://openweathermap.org/img/wn/03d@2x.png'
            }else{
                return 'https://openweathermap.org/img/wn/03n@2x.png'
            }
        }else if (this.id===803 || this.id===804) {

            if(this.hour>=6 && this.hour<=18){
                return 'https://openweathermap.org/img/wn/04d@2x.png'
            }else{
                return 'https://openweathermap.org/img/wn/04n@2x.png'
            }
        }
    }
    setVideo(){
        document.body.style.background = '';
        if (this.id >= 200 && this.id < 300) {
            document.body.style.backgroundImage = 'url(img/weatherGifs/Thunderstorm.gif)';
        } else if ((this.id >= 300 && this.id < 400) ||(this.id >= 520 && this.id < 600)) {
            document.body.style.backgroundImage = 'url(img/weatherGifs/drizzle.gif)';
        } else if (this.id >= 500 && this.id <=504) {
            document.body.style.backgroundImage = 'url(img/weatherGifs/Rain.gif)';
        } else if ((this.id >= 600 && this.id < 700)|| this.id===511) {
            document.body.style.backgroundImage = 'url(img/weatherGifs/snow.gif)';
        } else if (this.id >= 700 && this.id < 800) {
            document.body.style.backgroundImage = 'url(img/weatherGifs/mist.gif)';
        } else if (this.id===800) {
            if(this.hour>=6 && this.hour<=18){
                document.body.style.backgroundImage = 'url(img/weatherGifs/day.gif)';
            }else{
                document.body.style.backgroundImage = 'url(img/weatherGifs/night.gif)';
            }
        } else if (this.id===801) {
            if(this.hour>=6 && this.hour<=18){
                document.body.style.backgroundImage = 'url(img/weatherGifs/clouds-d.gif)';
            }else{
                document.body.style.backgroundImage = 'url(img/weatherGifs/clouds-n.gif)';
            }
        }else if (this.id===802) {
            document.body.style.backgroundImage = 'url(img/weatherGifs/scatteredClouds.gif)';
        }else if (this.id===803 || this.id===804) {
            document.body.style.backgroundImage = 'url(img/weatherGifs/brokenClouds.gif)';
        }
    }
}