function getInfo() {

    const stopInput = document.getElementById('stopId');
    const stopName = document.getElementById('stopName')
    const busesList = document.getElementById('buses')

    const stopId = stopInput.value

    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'

    stopName.textContent = '';
    busesList.innerHTML = '';


    fetch(`${BASE_URL}${stopId}`)
        .then((res) => res.json())
        .then((busInfo)=> {
            const {name, buses} = busInfo;
            stopName.textContent = name;
            // busesList.textContent = ''
            for (const bus in buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
                busesList.appendChild(li)

            }
        })
        .catch((err) => {
            stopName.textContent = 'Error'
        })

}