const express = require('express');
const app = express();
const port = 3000;
const mcping = require('mcping-js');

const server = new mcping.MinecraftServer('100.127.73.115', 25565)

const protocolVersion = 185
const timeout = 1000
app.get('/', (req, res) => {
    res.send("daje");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

server.ping(timeout,protocolVersion, (err, res) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(res)
})

