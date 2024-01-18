Docker experiments
===

Try:

- [Multi-stage builds](https://docs.docker.com/build/building/multi-stage/)
- [Understand permission requirements for Docker Desktop on Mac](https://docs.docker.com/desktop/mac/permission-requirements/)

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

Read =>
- [Workflow commands for GitHub Actions](https://docs.github.com/en/enterprise-cloud@latest/actions/using-workflows/workflow-commands-for-github-actions)
- [Working with the Container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [GitHub Actions: Deprecating save-state and set-output commands](https://github.blog/changelog/2022-10-11-github-actions-deprecating-save-state-and-set-output-commands/)

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


Metadata:

```json
  {
    "containerimage.descriptor": {
      "mediaType": "application/vnd.oci.image.index.v1+json",
      "digest": "sha256:7f694e5***d784c",
      "size": 856
    },
    "containerimage.digest": "sha256:7f694e***784c",
    "image.name": "ghcr.io/alundiak/devops-experiments:main"
  }
```


### Check available tags

```sh
curl -H "Authorization: Bearer YOUR_GITHUB_TOKEN" https://ghcr.io/v2/alundiak/devops-experiments/tags/list
```

or

```sh
curl -H "Authorization: Bearer YOUR_GITHUB_TOKEN" https://ghcr.io/v2/alundiak/devops-experiments/tags/list | jq .
```

### How to use my deployed image?


- `cd my-custom-image-using-another-image`
- `docker build -t my-custom-image-nodejs-wrapper .`
- `docker run --name=MyNodeJsWrapperContainer -p 3001:3001 -d my-custom-image-nodejs-wrapper`


### Platform related

- `docker pull --platform linux/arm64 ghcr.io/alundiak/devops-experiments:main`
- `FROM --platform=linux/arm64 ghcr.io/alundiak/devops-experiments:main` in Dockerfile

### Issue

Jan-18-2024 and I can't fix it or setup YAML file in the way to fix it:

```
main: Pulling from alundiak/devops-experiments
no matching manifest for linux/arm64 in the manifest list entries
```

There is also NO tag `latest`:

```
Using default tag: latest
Error response from daemon: manifest unknown
```

Not sure if it's related to GiyHub Packages issue with `unknown/unknown` - https://github.com/orgs/community/discussions/45969



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

docker run -P ...
#or
docker run --publish-all ...
# to publish all exposed ports to random ports

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_id_or_name>

docker info # to check your Docker environment to see if swarm mode is enabled. 
# or 
docker info | grep -i swarm # => active | inactive
docker info | grep -i apparmor
docker info | grep -i apparmor

# "docker save" command provide as output "A tar archive containing all image layers and tags"
docker save my-nodejs-image       
# $ cowardly refusing to save to a terminal. Use the -o flag or redirect
docker save my-nodejs-image -o my-image.tar
# Create real tar file
docker save ghcr.io/alundiak/devops-experiments -o my-ghcr-image.tar
docker save postgres -o my-image.tar

docker service rollback

docker swarm init
docker swarm join --token SWxxxKN-1-5nw**uefc 1x2.1x8.65.3:2xx7
docker swarm leave # to leave the swarm and join another one.
docker swarm ca # show certificate
docker stack ls        # List stacks
docker stack ps <stack-name>    # List services in the stack

docker history postgres
# LATEST layers from top, OLDEST layers at the bottom
# IMAGE          CREATED        CREATED BY                                      SIZE      COMMENT
# cb73dc89d410   3 days ago     CMD ["python" "app.py"]                         0B        buildkit.dockerfile.v0
# <missing>      3 days ago     EXPOSE map[80/tcp:{}]                           0B        buildkit.dockerfile.v0
# ....
# <missing>      2 months ago   ENV PYTHON_GET_PIP_URL=https://github.com/py…   0B        buildkit.dockerfile.v0
# ...
# <missing>      7 days ago     /bin/sh -c set -eux;  apt-get update;  apt-g…   48.5MB    
```

Inside a Docker container:

```sh
ifconfig
# or
ip addr show
# or
hostname -i
# or
curl ifconfig.me
# or
wget -qO- ifconfig.me
# or
cat /etc/hosts
# or
cat /etc/hostname
```


`docker info`: 

```sh
HTTP Proxy: http.docker.internal:3128
HTTPS Proxy: http.docker.internal:3128
No Proxy: hubproxy.docker.internal
```
