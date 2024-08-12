import { daysOfWeek, daysDiv,now } from "../variables.js";

export class Card{
    constructor(day, logo=null, backgorund=null, info=null, date, special=false){
        this.day=day;
        this.date=date;
        this.dayDiv=daysDiv.querySelector(`.days__${day.toLowerCase()}`);
        this.logo=logo;
        this.backgorung=backgorund;
        this.info=info;
        this.special=special;
    }
    deployInHTML(){
        this.dayDiv.innerHTML=`
            <p class="days__title">${this.day} ${this.date}</p>
			<div class="card__flex__min">
				<p class="card__min--max--temperature__min">${this.info['temp']['min'].toFixed(2)}°C • ${this.info['temp']['max'].toFixed(2)}°C </p>
				<div class="card__rain--probability__min">
					<svg class="card__rain" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M375.808 417.450667c0-8.874667 4.437333-20.138667 12.970667-34.474667 8.533333-14.336 17.066667-26.282667 24.917333-35.498667 2.048-2.389333 4.778667-5.802667 7.850667-9.557333s5.12-5.802667 5.461333-6.144l12.629333 14.677333c9.557333 10.581333 18.090667 22.528 25.941334 36.522667 7.850667 13.994667 11.946667 25.258667 11.946666 34.474667 0 13.994667-4.778667 26.282667-14.677333 36.181333-9.557333 9.898667-21.504 15.018667-35.84 15.018667-13.994667 0-26.282667-5.12-36.181333-15.018667-9.898667-10.24-15.018667-22.186667-15.018667-36.181333z m106.496 141.653333c0-9.898667 2.730667-21.162667 8.192-34.474667 5.461333-12.970667 12.288-25.258667 20.48-36.181333 15.701333-20.821333 30.378667-38.229333 44.714667-52.224 1.365333-1.024 4.437333-3.754667 8.874666-8.192l8.533334 8.192c13.312 12.629333 28.330667 30.037333 45.056 51.882667 8.874667 11.605333 15.701333 23.893333 21.162666 36.864s8.192 24.234667 8.192 34.133333c0 23.552-7.850667 43.008-23.893333 59.050667s-35.84 23.893333-59.050667 23.893333c-23.210667 0-42.666667-8.192-58.709333-24.234667s-23.552-35.84-23.552-58.709333z m51.882667-235.52c0-14.677333 11.264-34.133333 34.133333-58.026667l8.533333 9.557334c6.485333 7.509333 12.288 15.701333 17.408 25.258666 5.12 9.216 7.850667 17.066667 7.850667 23.210667 0 9.557333-3.413333 17.066667-9.898667 23.552-6.485333 6.144-14.336 9.557333-23.893333 9.557333-9.898667 0-18.090667-3.072-24.576-9.557333a33.314133 33.314133 0 0 1-9.557333-23.552z"  /></svg>						
					<p class="card__probability__min">${parseInt(this.info['pop']*100)} %</p>
				</div>
			</div>
			<img src="${this.logo}" alt="logo weather" class="card__image">
        `
        if(this.special){
            this.dayDiv.style.webkitBoxShadow = '13px 14px 81px -4px rgba(141,255,237,1)';
            this.dayDiv.style.mozBoxShadow = '13px 14px 81px -4px rgba(141,255,237,1)';
            this.dayDiv.style.boxShadow = '13px 14px 81px -4px rgba(141,255,237,1)';
        }
    }
}