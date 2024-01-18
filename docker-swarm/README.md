Docker Swarm
===

- `docker swarm init`
- `docker swarm join --token <token> <manager-ip>:<manager-port>`
- `docker stack deploy -c docker-compose.yml <stack-name>`
- `docker stack deploy -c docker-compose.yml lundiak-web-app`

```sh
docker stack ls        # List stacks
docker stack ps <stack-name>    # List services in the stack
```

Then

After `docker-compose up` I got 1 active container nd 2 are inactive because of port 80 is in use:

```
Gracefully stopping... (press Ctrl+C again to force)
Error response from daemon: driver failed programming external connectivity on endpoint docker-swarm-web-2 (76d30***6cfc4d):
Bind for 0.0.0.0:80 failed: port is already allocated
```

btw from ChatGPT:

- `docker service create --replicas 3 --name web nginx:latest`
- `docker service scale web=5`


```sh
$ docker service ls

ID             NAME                  MODE         REPLICAS   IMAGE          PORTS
rxxxxxxxxdf   lundiak-web-app_web   replicated   0/3        nginx:latest   *:80->80/tcp
aqpxxxih9a1   web (old name)        replicated   3/3        nginx:latest   
lund ~/projects/DevOps-experiments/docker-swarm [main] $ 
```

```sh
# Use the docker service scale command to scale down the service to zero replicas. T
docker service scale lundiak-web-app_web=0
# After ensuring that no containers are running, scale up the service to the desired number of replicas.
docker service scale lundiak-web-app_web=3
```


## Other commands

```sh
docker swarm init
docker swarm join --token SWxxxKN-1-5nw**uefc 1x2.1x8.65.3:2xx7
docker swarm leave # to leave the swarm and join another one.
docker swarm ca # show certificate

docker stack ls        # List stacks
docker stack ps <stack-name>    # List services in the stack

docker service ls
docker service rollback

# docker service prune # doesn't exist
docker service rm web
docker service rm lundiak-web-app_web
```
