Usage of my custom Docker image on GitHub Container Registry
===

### How to use my deployed image?

- `cd my-custom-image-using-another-image`
- `docker build -t my-custom-image-nodejs-wrapper .`
- `docker run --name=MyNodeJsWrapperContainer -p 3001:3001 -d my-custom-image-nodejs-wrapper`


### Platform related

- `docker pull --platform linux/arm64 ghcr.io/alundiak/devops-experiments:main`
- `FROM --platform=linux/arm64 ghcr.io/alundiak/devops-experiments:main` in Dockerfile
