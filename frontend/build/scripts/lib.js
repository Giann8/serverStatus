const S_PORT = 3000;
const S_IP = "172.28.0.2";
const REF_TIMEOUT = 10000;

function getStatus() {
    console.log("fetching port " + S_PORT)
    fetch(`http://localhost:` + S_PORT + `/ping`)
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return null
            }
        })
        .then(response => showStatus(response))

        .catch(error => { showStatus(null); console.log("errore"+error) })
}

function showStatus(response) {

    const status = document.getElementById('status');
    const players = document.getElementById('players');

    if (response == null) {
        status.innerHTML = "Server is offline"
        players.innerHTML = "0"
        status.classList.remove('status-online');
        status.classList.add('status-offline');
        return
    }

    status.innerHTML = "Online"
    status.classList.remove('status-offline');
    status.classList.add('status-online');
    players.innerHTML = response.players.online + "/" + response.players.max
}

function refresh() {
    getStatus();
    setInterval(getStatus, 10000);
}