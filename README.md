# ServerStatus

## Description
- This repo contains a little website for checking personal minecraft server online status and players.

## Documentatiom
After cloning the repo, enter the directory with:
```
cd ServerStatus
```
change the compose.yml file with the environment for your Minecraft server (signed with <code># TO CHANGE</code>) and then do:

```
docker compose -d up --build
```

then you can check the status of your minecraft server at <code>http://127.0.0.1:3001/index.html</code> .

you can change the port of the webpage in <code>.env</code> as you like.

> [!WARNING]: if you change the server side port <code>(S_PORT)</code> remember to change it in the client side code.

