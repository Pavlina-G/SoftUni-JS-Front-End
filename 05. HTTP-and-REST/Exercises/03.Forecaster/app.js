function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const TODAY_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const THREE_DAY_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    const locationInput = document.getElementById('location');
    const getWeatherInput = document.getElementById('submit');
    getWeatherInput.addEventListener('click', getWeatherInfo)

    const forecastInfo = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    let codeLocation = null;
    const weatherIcons = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;',
    }

    async function getWeatherInfo() {
        try {
            const response = await fetch(BASE_URL)
            const data = await response.json()
            for (const obj of data) {
                if (locationInput.value === obj.name) {
                    codeLocation = obj.code;
                    break;
                }
            }
            if (codeLocation !== null) {
                try {
                    const res = await fetch(`${TODAY_URL}${codeLocation}`)
                    const resData = await res.json()

                    const {name, forecast} = resData;
                    const {condition, high, low} = forecast;

                    const divInfo = document.createElement('div');
                    divInfo.classList.add('forecasts');

                    const spanSymbol = document.createElement('span')
                    spanSymbol.classList.add('condition', 'symbol')

                    spanSymbol.innerHTML = weatherIcons[condition];

                    divInfo.appendChild(spanSymbol);
                    const spanWrapper = document.createElement('span')
                    spanWrapper.setAttribute('class', 'condition')

                    const spanName = document.createElement('span')
                    spanName.textContent = name;
                    spanName.setAttribute('class', 'forecast-data')

                    const spanDegree = document.createElement('span')
                    spanDegree.innerHTML = `${low}${weatherIcons['Degrees']}/${high}${weatherIcons['Degrees']}`
                    spanDegree.setAttribute('class', 'forecast-data')

                    const spanCondition = document.createElement('span')
                    spanCondition.textContent = condition
                    spanCondition.setAttribute('class', 'forecast-data')

                    spanWrapper.appendChild(spanName);
                    spanWrapper.appendChild(spanDegree);
                    spanWrapper.appendChild(spanCondition);
                    divInfo.appendChild(spanWrapper)
                    currentDiv.appendChild(divInfo)

                    forecastInfo.style.display = 'block';

                    const resUpcoming = await fetch(`${THREE_DAY_URL}${codeLocation}`)
                    const upcomingData = await resUpcoming.json()

                    const upcomingForecast = upcomingData.forecast;

                    const divUpcomingInfo = document.createElement('div')
                    divUpcomingInfo.setAttribute('class', 'forecast-info')


                    for (const el of upcomingForecast) {
                        const {condition, high, low} = el;
                        const spanUpcoming = document.createElement('span')
                        spanUpcoming.setAttribute('class', 'upcoming')

                        const spanSymbol = document.createElement('span')
                        spanSymbol.setAttribute('class', 'symbol')
                        spanSymbol.innerHTML = weatherIcons[condition];

                        const spanDegree = document.createElement('span')
                        spanDegree.setAttribute('class', 'forecast-data')
                        spanDegree.innerHTML = `${low}${weatherIcons['Degrees']}/${high}${weatherIcons['Degrees']}`

                        const spanCondition = document.createElement('span')
                        spanCondition.setAttribute('class', 'forecast-data')
                        spanCondition.textContent = condition

                        spanUpcoming.appendChild(spanSymbol)
                        spanUpcoming.appendChild(spanDegree)
                        spanUpcoming.appendChild(spanCondition)
                        divUpcomingInfo.appendChild(spanUpcoming)
                    }
                    upcomingDiv.appendChild(divUpcomingInfo)

                } catch (e) {
                    forecastInfo.style.display = "block";
                    forecastInfo.innerHTML = 'Error';
                }
            }

        } catch (e) {
            forecastInfo.style.display = "block";
            forecastInfo.innerHTML = 'Error';
        }








    }


}

attachEvents();

