document.addEventListener('DOMContentLoaded',function (){

const apiKey = 'ec07f00c4afe8154768f64c3863189d5';
const nombreCiudad = "Montevideo";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad},uy&APPID=${apiKey}&lang=es`;


const climaInfoDiv = document.getElementById('firstDiv');

fetch(apiUrl)
.then(response => {
if (!response.ok){
    throw new Error('La solicitud no fue exitosa. Codigo de estado: ${response.status}');
}
return response.json();
})
.then(data => {

const nombreCiudad = data.name
const temperatura = (data.main.temp - 273.15).toFixed(2); // Convertir Kelvin a Celsius
const descripcion = data.weather[0].descripcion;

//emoji para temperatura y tiempo
const emoji = '<i class="fa-solid fa-temperature-three-quarters"></i>';
const emoji2 = '<i class="fa-solid fa-cloud-sun"></i>';
const emoji3 = '<i class="fa-solid fa-arrow-down"></i>';

// Crear un mensaje con la información del clima
const mensaje = `El clima en ${nombreCiudad} es: ${emoji2} ${descripcion} <br>
con una temperatura de: ${emoji} ${temperatura}°C.`;

// Mostrar el mensaje en el Div
climaInfoDiv.innerHTML = mensaje;
parrafo.innerHTML = `Aquí se mostrará la información ${emoji3}`;
})
.catch(error =>{
    console.error('ocurrió un error:', error);
});

});