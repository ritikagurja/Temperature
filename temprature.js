
function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const converter = document.getElementById('converter');
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number!';
    } else {
        switch (unit) {
            case 'celsius':
                result = `${temperature}°C = ${(temperature * 9/5 + 32).toFixed(2)}°F | ${(temperature + 273.15).toFixed(2)}K`;
                setWeatherBackground(temperature, 'celsius');
                break;
            case 'fahrenheit':
                result = `${temperature}°F = ${((temperature - 32) * 5/9).toFixed(2)}°C | ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
                setWeatherBackground(temperature, 'fahrenheit');
                break;
            case 'kelvin':
                result = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C | ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
                setWeatherBackground(temperature, 'kelvin');
                break;
        }
    }

    document.getElementById('result').innerText = result;
}

// Function to change background based on weather
function setWeatherBackground(temperature, unit) {
    let backgroundUrl = '';

    if (unit === 'celsius') {
        if (temperature > 30) {
            backgroundUrl = 'sunny.png';  // Sunny weather
        } else if (temperature < 0) {
            backgroundUrl = 'snowy.png';  // Snowy weather
        } else {
            backgroundUrl = 'cloudy.png';  // Cloudy weather
        }
    } else if (unit === 'fahrenheit') {
        if (temperature > 86) {
            backgroundUrl = 'sunny.png';  // Sunny weather
        } else if (temperature < 32) {
            backgroundUrl = 'snowy.png';  // Snowy weather
        } else {
            backgroundUrl = 'cloudy.png';  // Cloudy weather
        }
    } else if (unit === 'kelvin') {
        if (temperature > 303.15) {
            backgroundUrl = 'sunny.png';  // Sunny weather
        } else if (temperature < 273.15) {
            backgroundUrl = 'snowy.png';  // Snowy weather
        } else {
            backgroundUrl = 'cloudy.png';  // Cloudy weather
        }
    }

    // Change the background image dynamically
    document.body.style.backgroundImage = `url(${backgroundUrl})`;
}
