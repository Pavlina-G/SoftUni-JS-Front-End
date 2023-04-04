function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/'
    const departInput = document.getElementById('depart')
    const arriveInput = document.getElementById('arrive')
    const stopInfo = document.querySelector('#info > span')

    let stopId = 'depot';
    let stopName = '';
    function depart() {
        departInput.disabled = true;
        arriveInput.disabled = false;
        fetch(`${BASE_URL}${stopId}`)
            .then((res) => res.json())
            .then((busStops) => {
                console.log(busStops)
                const { name, next } = busStops;
                stopInfo.textContent = `Next stop ${name}`;
                stopId = next;
                stopName = name;
            })
            .catch(() => {
                stopInfo.textContent = 'Error';
                departInput.disabled = true;
                arriveInput.disabled = true;
            })
    }

    async function arrive() {
        arriveInput.disabled = true;
        departInput.disabled = false;
        stopInfo.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();