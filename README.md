- Run server: `yarn serve`
- Send jobs: `yarn push-job`
- Process jobs (start worker): `yarn start`

## Limitation

- Need to restart worker when new job changed
  - Solution: redeploy the container (if deploying as docker)
