Be sure to have `faktory` installed before starting (see [faktory docs](https://github.com/contribsys/faktory/wiki/Installation))

- Run server: `yarn serve`
- Send jobs: `yarn push-job`
- Process jobs (start worker): `yarn start`

## Limitation

- Need to restart worker when new job changed
  - Solution: redeploy the container (if deploying as docker)
