# serverless slack-bot prismic

Slack-bot via headless CMS prismic using serverless framework on google cloud functions

## Setup development

### Clone repository

```bash
$ git clone git@github.com:pramendra/serverless-slack-bot-prismic.git
$ cd serverless-slack-bot-prismic
```

### Change node version

```bash
$ nvm use
```

### Install dependencies

```bash
$ npm install
```

### Run dev environment

#### Run to build typescript on watch mode

```bash
$ npm run dev
```

#### Run to emulate cloud function

```bash
$ npm run coppa:watch
```

#### Run to proxy reqest from internet to local server

```bash
$ ngrok http 8080
```

## Tutorial

### Clone [Express server using serverless deployed on GCP using github actions CI/CD](https://github.com/pramendra/serverless-typescript-gcp)

```bash
$ git clone git@github.com:pramendra/serverless-typescript-gcp.git serverless-slack-bot-prismic
$ git remote set-url origin git@github.com:pramendra/serverless-slack-bot-prismic.git
$ git push
```

### Move [Express server using serverless deployed on GCP using github actions CI/CD](docs/TUTORIAL.md) Documentation
