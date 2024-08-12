import { mainDiv, cityInfo} from "./variables.js";

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
	fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=388a98cce4230ec690b138a0004d0f41`).then(e=>e.ok?e.json():null)
	.then(e=>{
		apiData(e);
	}).catch(e=>{
		console.log(`Error: ${e}`)
	})
    
}

//logica para desplegar los datos

function apiData(api){
    console.log(api)
    let current=api['current'];
    let daily=api['daily'];
    let timeZone=api['timezone']
    // console.log(current,daily);
    mainWeather(current, daily[0], timeZone)
}

function mainWeather(waetherMoment, weatherDay, timeZone){
    const now=new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const date=`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    const hour=`${now.getHours()}:${now.getMinutes()}`;
    cityInfo.innerHTML=`
        <span>${timeZone} ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}</span> Starting at ${hour} 
    `;
    console.log(waetherMoment, weatherDay, timeZone, date, hour);
    console.log(mainDiv,cityInfo)

    const informationDiv=mainDiv.querySelector('.card__information');
    const temperature=waetherMoment['temp'];

    const textAboutDay=weatherDay['summary'];
    const minMaxTemperature=`${weatherDay['temp']['min']}°C • ${weatherDay['temp']['max']}°C`;
    informationDiv.innerHTML=`
        <p class="card__temperature">${temperature} °C</p>
		<p class="card__text">${textAboutDay}</p>
		<p class="card__min--max--temperature">${minMaxTemperature}</p>
    `
}