# Frontend Project for Power2Go

An app to search for informations about countries

## How to use?
### Docker

The file `docker-compose.yml` defines that when the container initialize the command `npm start` will run. To use, simply execute:

```bash
docker-compose up -d
```

### Local

You can start the project manually by running the following commands:
```bash
# make sure to have node 16 installed
npm install
```

After the installation is completed, run:
```bash
# make sure to have node 16 installed
npm start
```



### Where to access
```bash
# After initialized the containers go to:
http://localhost:8081
```

### Tip

In case of port conflicts, use the following commands:

```bash
killall node
docker stop $(docker ps -qa)
```

Caso esteja utilizando o windows faça:
```bash
netstat -ano|findstr "PID :8081" #retorna numero pid
taskkill /pid {numero da pid} /f #coloque o numero pid removendo os "{}"
```