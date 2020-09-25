let apiKey = '774e9108bafc7d02ffcb601fbd947dfa';


let searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
    let searchBar = document.getElementById('search-bar');
    let container = document.querySelector('.container');
    let cityName = searchBar.value.toLowerCase();
    if (cityName != '') {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                result = data;
                let weather = document.getElementById('weather');
                let str = `<h1 id="city">${result.name}</h1>
                        <h2 id="temperature">${Math.round(eval(result.main.temp - 273.15))}<span>&deg;C</span></h2>
                        <img
                        src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png"
                        alt=""
                        id="icon"
                        />
                        <p id="day-type">${result.weather[0].description}</p>
                        <p id="min-max">${Math.round(eval(result.main.temp_min - 273.15))}<span>&deg;C</span> / ${Math.round(eval(result.main.temp_max - 273.15))}<span>&deg;C</span></p>`;
                weather.innerHTML = str;
                if (document.getElementById('day-type').innerText.includes('rain') || document.getElementById('day-type').innerText.includes('drizzle') || document.getElementById('day-type').innerText.includes('thunderstorm')) {
                    container.id = 'rainy';
                }
                else if (document.getElementById('day-type').innerText.includes('haze')) {
                    container.id = 'haze';
                }
                else if (document.getElementById('day-type').innerText.includes('mist')) {
                    container.id = 'mist';
                }
                else if (document.getElementById('day-type').innerText.includes('cloud')) {
                    container.id = 'cloudy';
                }
                else if (document.getElementById('day-type').innerText.includes('sunny')) {
                    container.id = 'sunny';
                }
                else if (document.getElementById('day-type').innerText.includes('smoke')) {
                    container.id = 'smoke';
                }

                searchBar.value = '';

            });
    }
    else {
        alert('Enter a valid city name...');
    }
});
