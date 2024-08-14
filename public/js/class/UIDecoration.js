export class UIDecoration{
    constructor(id, hour=''){
        this.id=parseInt(id);
        this.hour=parseInt(hour.split(':')[0])
    }
    icon(){
        console.log(this.hour)
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
                return 'https://openweathermap.org/img/wn/01d@2x.png'
            }else{
                return 'https://openweathermap.org/img/wn/01n@2x.png'
            }
        }else if (this.id===802) {
            if(this.hour>=6 && this.hour<=18){
                return 'https://openweathermap.org/img/wn/01d@2x.png'
            }else{
                return 'https://openweathermap.org/img/wn/01n@2x.png'
            }
        }else if (this.id===803) {
            if(this.hour>=6 && this.hour<=18){
                return 'https://openweathermap.org/img/wn/01d@2x.png'
            }else{
                return 'https://openweathermap.org/img/wn/01n@2x.png'
            }
        }else if (this.id===804) {
            if(this.hour>=6 && this.hour<=18){
                return 'https://openweathermap.org/img/wn/01d@2x.png'
            }else{
                return 'https://openweathermap.org/img/wn/01n@2x.png'
            }
        }
    }
}