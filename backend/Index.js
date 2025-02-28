require('dotenv').config();

const S_PORT = process.env.S_PORT ;
const MSERVER_IP = process.env.MSERVER_IP ;
const MSERVER_PORT = process.env.MSERVER_PORT  ;
const TIMEOUT = process.env.TIMEOUT ;
const PROTOCOL_VERSION = process.env.PROTOCOL_VERSION;

const express = require('express');
const app = express();

const mcping = require('mcping-js');
const cors = require('cors');
app.use(cors());

const server = new mcping.MinecraftServer(MSERVER_IP, MSERVER_PORT);

app.get('/', (req, res) => {
    res.send("daje");
})

app.listen(S_PORT, () => {
    console.log(`Example app listening at http://${S_IP}:${S_PORT}`);
})


app.get("/ping", (_, res) => {
    server.ping(TIMEOUT, PROTOCOL_VERSION, (err, instance) => {
        if (err) {
            res.status(500).json({ error: "error while pinging" })
        } else {
            console.log(instance)
            res.status(200).json(instance)
        }
    })
});

