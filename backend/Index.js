const express = require('express');
const app = express();
const port = 3000;
const mcping = require('mcping-js');
const cors = require('cors');
app.use(cors());

const server = new mcping.MinecraftServer('100.127.73.115', 25565)

const protocolVersion = 185
const timeout = 1000
app.get('/', (req, res) => {
    res.send("daje");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


app.get("/ping", (req, res) => {
    server.ping(timeout, protocolVersion, (err, instance) => {
        if (err) {
            res.status(500).json({ error: "error while pinging" })
        } else {
            console.log(instance)
            res.status(200).json(instance)
        }
    })
});

