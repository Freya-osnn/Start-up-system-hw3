async function fetchWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=60bd7369db6a45d4bd3151713251802&q=New York');
    const data = await response.json();
    document.getElementById('weather').innerText = `Temperature: ${data.current.temp_c}°C`;
}
fetchWeather();

document.addEventListener("mousemove", (event) => {
    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;
    document.body.style.backgroundColor = `rgb(${x * 255}, ${y * 255}, 150)`;
});
