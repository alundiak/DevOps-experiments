Testcontainers with Docker
===

- [What is Testcontainers, and why should you use it?](https://testcontainers.com/guides/introducing-testcontainers/)
- [Getting started with Testcontainers for Node.js](https://testcontainers.com/guides/getting-started-with-testcontainers-for-nodejs/)

`DEBUG=testcontainers* npm test`


## Troubleshooting

Looks like `actions/setup-node` with `cache` property causes issue:

> Dependencies lock file is not found in /home/runner/work/DevOps-experiments/DevOps-experiments. Supported file patterns: package-lock.json,npm-shrinkwrap.json,yarn.lock

Sources:
- https://stackoverflow.com/questions/68639588/github-actions-dependencies-lock-file-is-not-found-in-runners-path
- https://github.com/actions/setup-node/issues/706
- https://dev.to/imomaliev/til-fix-error-dependencies-lock-file-is-not-found-ade
