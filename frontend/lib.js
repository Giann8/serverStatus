require('dotenv').config();

const S_PORT = process.env.S_PORT ;

function getStatus() {
    fetch(`http://localhost:${S_PORT}/ping`)
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return null
            }
        })
        .then(response => showStatus(response))
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
    players.innerHTML = response.players.online+"/"+response.players.max
}

export function refresh() {
    showStatus(getStatus())
    setInterval(getStatus, 10000);
}