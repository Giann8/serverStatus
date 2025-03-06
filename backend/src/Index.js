
const s_port = 3000
const MSERVER_IP = process.env.MSERVER_IP||"100.127.73.115";
const MSERVER_PORT = process.env.MSERVER_PORT;
const PROTOCOL_VERSION = process.env.PROTOCOL_VERSION;

const timeout = 5000;

const express = require('express');
const app = express();

const mcping = require('mcping-js');
const cors = require('cors');

app.use(cors());

const server = new mcping.MinecraftServer(MSERVER_IP, MSERVER_PORT);

app.get('/', (req, res) => {
    res.send("daje");
})

app.listen(s_port, () => {
    console.log("Listening... Port: " + s_port);
})


app.get("/ping", (_, res) => {
    server.ping(timeout, PROTOCOL_VERSION, (err, instance) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            console.log(instance)
            res.status(200).json(instance)
        }
    })
});

