async function fetchWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=60bd7369db6a45d4bd3151713251802&q=New York');
    const data = await response.json();
    document.getElementById('weather').innerText = `Temperature: ${data.current.temp_c}°C`;
}
fetchWeather();
