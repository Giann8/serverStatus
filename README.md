# serverStatus.github.io

## Description
- This repo contains a little website for checking personal minecraft server online status and players.

## Documentatiom
After cloning the repo, enter the directory with:
```
cd ServerStatus
```
change the compose.yml file with the environment for your Minecraft server (signed with <code># TO CHANGE</code>) and then do:

```
docker compose -d up
```

then you can check the status of your minecraft server at <code>http://127.0.0.1:3001</code> .

you can change the ports in <code>.env</code> as you like.

