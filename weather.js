import readline from "readline/promises";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

const API_KEY = '27cfc8d0c4b8df5f08069ec450b5cff7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city) => {
   const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
   try{
    const response = await fetch(url);
    if(!response.ok){
       throw new Error('City not found. Please enter a valid city name.');
    }
    const weatherData = await response.json();
    console.log('\nWeather Information:');
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);

    }catch (error) {
    console.error('Error fetching weather data:', error.message);
   }
}

const city = await rl.question('Enter city name: ');
await getWeather(city);
rl.close();


