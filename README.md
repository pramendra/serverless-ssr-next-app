# serverless slack-bot prismic

Slack-bot via headless CMS prismic using serverless framework on google cloud functions

## Setup development

### Clone repository

```bash
$ git clone git@github.com:pramendra/serverless-slack-bot-prismic.git
$ cd serverless-slack-bot-prismic
```

### Create .env file

```
GCP_REGION=
GCP_PROJECT=
CREDENTIALS_PATH=~/.gcloud/keyfile.json
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

### configure graphql

#### install dependencies

```bash
$ npm install apollo-client graphql-tag graphql apollo-link-prismic apollo-cache-inmemory --save
```

#### add graphql endpont

add following in .env

```
PRISMIC_GRAPHQL=https://xxx.cdn.prismic.io/graphql
```

## with nextjs

```bash
$ npm i -D @types/react @types/webpack babel-plugin-styled-components npm-run-all pino-prett serverless ts-node
$ npm i @google-cloud/functions-framework next next-routes react react-dom
```

### run in dev mode

```bash
$ npm run dev
```

### invoke function locally

```bash
$ npm run local:build
$ cd .build
$ npm run local:run
```

### deploy

```bash
$ npm run deploy
```

### setup styled component

```
$ npm i styled-components
$ npm i @chakra-ui/core @emotion/core @emotion/styled emotion-theming
$ npm i -D babel-plugin-styled-components @types/styled-components
```

#### configure

`_app.tsx and _document.tsx`

### setup apollo client

```bash
$ npm i @apollo/react-hooks apollo-cache-inmemory apollo-client apollo-link-http graphql graphql-tag apollo-link-prismic
$ npm i -D babel-plugin-graphql-tag @types/apollo-link-prismic
```

#### append .babelrc

```
["graphql-tag"]
```

Update

```
- tsconfig.json
- _app.tsx
```
