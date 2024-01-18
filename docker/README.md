Docker experiments
===

## Basic Docker image and container setup

- `docker build -t my-nodejs-image:latest --file Dockerfile .`
- `docker run --name=MyNodeJsContainer -p 3000:3000 -d my-nodejs-image:latest`


## Before you continue:

- DO NOT mess up with official DockerHub account!
- Once you have logged in to both Docker Hub and GitHub Container Registry, Docker will securely store the credentials in its configuration file.


```sh
docker pull your-dockerhub-username/your-image-name
docker pull ghcr.io/your-github-username/your-image-name
```


## GitHub Actions deploy Docker image on GitHub registry

To be able to `pull` need to `docker login ghcr.io`.

This command will prompt you to enter your GitHub username and a **personal access token** with the `read:packages` scope.


```sh
Run docker/login-action@343***6df046d
  with:
    registry: ghcr.io
    username: al***iak
    password: ***
    ecr: auto
    logout: true
  env:
    REGISTRY: ghcr.io
    IMAGE_NAME: alundiak/DevOps-experiments
Logging into ghcr.io...
Login Succeeded!
```

So I assume Docker image will be available as `alundiak/DevOps-experiments` => 

```sh
docker pull ghcr.io/alundiak/DevOps-experiments
```

> Pushing signature to: ghcr.io/alundiak/devops-experiments

So I assume it works also when all in lowercase?


By default logic of YAML file GitHuba Actions deploy Package for later usage this way:

```sh
docker pull ghcr.io/alundiak/devops-experiments:sha256-f5e1d13****d2de0b.sig
```



## Other Docker commands

```sh
docker build -t my-service:$(date +%s) --file Dockerfile .
docker-compose build
docker-compose up
docker-compose up -d
docker-compose up -d --force-recreate
docker-compose down
docker images
docker image prune --force
docker ps
docker ps -a
docker network ls
docker volume create --name=my_custom_folder_for_volume_data
docker volume ls
```


`docker info`: 

```sh
HTTP Proxy: http.docker.internal:3128
HTTPS Proxy: http.docker.internal:3128
No Proxy: hubproxy.docker.internal
```
