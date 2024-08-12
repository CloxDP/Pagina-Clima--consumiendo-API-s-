import { mainDiv, cityInfo, now, months, daysOfWeek, daysDiv} from "./variables.js";
import { Card } from "./class/Card.js";
import { wednesday } from "../../dist/js/variables.js";

export function getUbication(){
    navigator.geolocation.getCurrentPosition(showUbication, showError);
    setInterval(()=>{
        navigator.geolocation.getCurrentPosition(showUbication, showError);
    }, 600000)
}	

export function showUbication(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log(`Latitud: ${lat}, Longitud: ${lon}`);
	getData(lat, lon);
}

export function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
		console.log("El usuario denegó la solicitud de geolocalización.");
		break;
		case error.POSITION_UNAVAILABLE:
		console.log("La información de ubicación no está disponible.");
		break;
		case error.TIMEOUT:
		console.log("La solicitud para obtener la ubicación ha caducado.");
		break;
		case error.UNKNOWN_ERROR:
		console.log("Se ha producido un error desconocido.");
		break;
	}
}

// Llamar a la función para obtener la ubicación
export function getData(lat,lon){
	fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=388a98cce4230ec690b138a0004d0f41`)
    .then(e=>e.ok?e.json():null)
	.then(e=>{
		apiData(e);
	}).catch(e=>{
		console.log(`Error: ${e}`)
	})
}

//logica para desplegar los datos
function apiData(api){
    let current=api['current'];
    let daily=api['daily'];
    let timeZone=api['timezone']
    const dayName = daysOfWeek[now.getDay()];
    mainWeather(current, daily[0], timeZone);
    getWeatherForecast(dayName, daily);
}

function mainWeather(waetherMoment, weatherDay, timeZone){
    let minutes=now.getMinutes().toString();
    minutes=minutes.length===1?`0${now.getMinutes()}`: minutes;
    const hour=`${now.getHours()}:${minutes}`;
    cityInfo.innerHTML=`
        <span>${timeZone} ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}</span> Starting at ${hour} 
    `;
    const informationDiv=mainDiv.querySelector('.card__information');
    const visualsDiv=mainDiv.querySelector('.card__visuals')
    console.log()
    informationDiv.innerHTML=`
        <p class="card__temperature">${waetherMoment['temp']} °C</p>
		<p class="card__text">${weatherDay['summary']}</p>
		<p class="card__min--max--temperature">${weatherDay['temp']['min']}°C • ${weatherDay['temp']['max']}°C</p>
    `
    visualsDiv.innerHTML=`
        <img src="" alt="logo weather" class="card__image">
		<div class="card__rain--probability">
			<svg class="card__rain" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M375.808 417.450667c0-8.874667 4.437333-20.138667 12.970667-34.474667 8.533333-14.336 17.066667-26.282667 24.917333-35.498667 2.048-2.389333 4.778667-5.802667 7.850667-9.557333s5.12-5.802667 5.461333-6.144l12.629333 14.677333c9.557333 10.581333 18.090667 22.528 25.941334 36.522667 7.850667 13.994667 11.946667 25.258667 11.946666 34.474667 0 13.994667-4.778667 26.282667-14.677333 36.181333-9.557333 9.898667-21.504 15.018667-35.84 15.018667-13.994667 0-26.282667-5.12-36.181333-15.018667-9.898667-10.24-15.018667-22.186667-15.018667-36.181333z m106.496 141.653333c0-9.898667 2.730667-21.162667 8.192-34.474667 5.461333-12.970667 12.288-25.258667 20.48-36.181333 15.701333-20.821333 30.378667-38.229333 44.714667-52.224 1.365333-1.024 4.437333-3.754667 8.874666-8.192l8.533334 8.192c13.312 12.629333 28.330667 30.037333 45.056 51.882667 8.874667 11.605333 15.701333 23.893333 21.162666 36.864s8.192 24.234667 8.192 34.133333c0 23.552-7.850667 43.008-23.893333 59.050667s-35.84 23.893333-59.050667 23.893333c-23.210667 0-42.666667-8.192-58.709333-24.234667s-23.552-35.84-23.552-58.709333z m51.882667-235.52c0-14.677333 11.264-34.133333 34.133333-58.026667l8.533333 9.557334c6.485333 7.509333 12.288 15.701333 17.408 25.258666 5.12 9.216 7.850667 17.066667 7.850667 23.210667 0 9.557333-3.413333 17.066667-9.898667 23.552-6.485333 6.144-14.336 9.557333-23.893333 9.557333-9.898667 0-18.090667-3.072-24.576-9.557333a33.314133 33.314133 0 0 1-9.557333-23.552z"  /></svg>						
			<p class="card__probability">${parseInt(weatherDay['pop']*100)} %</p>
		</div>
    `
}

//funcion para detrminar el dia actual y los futuros dias con sus climas
export function getWeatherForecast(day, weatherDays){
    daysOfWeek.forEach(e=>{
        // console.log(e)
        let weekDay=daysDiv.querySelector(`.days__${e.toLowerCase()}`);
        if (day.toLowerCase()===weekDay.id.toString()){
            const card= new Card(day,'','',weatherDays[0], now.getDate(), true)
            card.deployInHTML();
        }
    })
    let indice = daysOfWeek.indexOf(day);
    let newDaysOfWeek=[...daysOfWeek]
    // Si el día existe en el array, eliminarlo
    if (indice !== -1) {
        newDaysOfWeek.splice(indice, 1);
    }
    // Crear un nuevo array que comience desde el día siguiente al eliminado
    newDaysOfWeek = newDaysOfWeek.slice(indice).concat(newDaysOfWeek.slice(0, indice));
    getWeatherWeek(newDaysOfWeek, weatherDays)
}
//funcion para rellenar el resto de dias

export function getWeatherWeek(days, weatherDays){
    days.forEach((e,i)=>{
        const card= new Card(e,'','',weatherDays[i+1], now.getDate()+i+1)
        card.deployInHTML();
    })
}