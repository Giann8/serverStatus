function getStatus() {
    fetch('http://localhost:3000/ping')
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return null
            }
        })
        .then(response => showStatus(response))
        .catch(error => console.log(error));
}

function showStatus(response) {

    const status = document.getElementById('status');
    const players = document.getElementById('players');

    if (response == null) {
        status.innerHTML = "Server is offline"
        players.innerHTML = "0"
        return
    }

    status.innerHTML = "Online"
    players.innerHTML = response.players.online+"/"+response.players.max
}

function refresh() {
    getStatus()
    setTimeout(refresh, 5000)
}