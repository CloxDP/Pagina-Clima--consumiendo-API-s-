

export function getUbication(){
	navigator.geolocation.getCurrentPosition(showUbication, showError);
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
	fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=388a98cce4230ec690b138a0004d0f41`).then(e=>e.ok?e.json():null)
	.then(e=>{
		let jsonObject=e;
		showHTML(jsonObject);
	}).catch(e=>{
		console.log(`Error: ${e}`)
	})
}
export function showHTML(json){
	console.log(json)
}