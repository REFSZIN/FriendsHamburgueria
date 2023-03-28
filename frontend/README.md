<!-- markdownlint-disable -->
![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=REFSZIN%20&fontAlignY=40&color=gradient)
<div align="center">
     <img height="300px" src="https://user-images.githubusercontent.com/95008410/226691986-1c67a72a-f507-42b6-b763-cd39f24f1a47.png">
<h1 align="center">
   Friends Hamburgueria - Frontend
</h1>
Seja bem-vindo ao sabor e suculência a cada mordida da Friends Hamburgueria
<hr>
  <h3>Built With</h3>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Docker-316192?style=for-the-badge&logo=Docker&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

# Description

Front-End application, React + Styled Components + MUI + Contexts + OAuth 2.0 
</br>

</br>
<h1 align="center margin 10px">Librariess<h1>

### 
- [@date-io/date-fns](https://www.npmjs.com/package/@date-io/date-fns) 
- [@emotion/react](https://www.npmjs.com/package/@emotion/react) 
- [@emotion/styled](https://www.npmjs.com/package/@emotion/styled) 
- [@material-ui/core](https://www.npmjs.com/package/@material-ui/core) 
- [@material-ui/pickers](https://www.npmjs.com/package/@material-ui/pickers) 
- [@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material) 
- [@mui/material](https://www.npmjs.com/package/@mui/material) 
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) 
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react) 
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event) 
- [axios](https://www.npmjs.com/package/axios) 
- [date-fns](https://www.npmjs.com/package/date-fns) 
- [dayjs](https://www.npmjs.com/package/dayjs) 
- [file-saver](https://www.npmjs.com/package/file-saver) 
- [firebase](https://www.npmjs.com/package/firebase) 
- [html2canvas](https://www.npmjs.com/package/html2canvas) 
- [qs](https://www.npmjs.com/package/qs) 
- [react](https://www.npmjs.com/package/react) 
- [react-credit-cards](https://www.npmjs.com/package/react-credit-cards) 
- [react-dom](https://www.npmjs.com/package/react-dom) 
- [react-icons](https://www.npmjs.com/package/react-icons) 
- [react-input-mask](https://www.npmjs.com/package/react-input-mask) 
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) 
- [react-scripts](https://www.npmjs.com/package/react-scripts) 
- [react-toastify](https://www.npmjs.com/package/react-toastify) 
- [react-useinterval](https://www.npmjs.com/package/react-useinterval) 
- [styled-components](https://www.npmjs.com/package/styled-components) 
- [web-vitals](https://www.npmjs.com/package/web-vitals) 
<br/>
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_BASE_URL=http://localhost:4000`

`PORT = number #recommended:3000`

</br>
## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env.development` file using the `.env.example` file (see "Running application locally or inside docker section" for details)
5. Run all migrations

```bash
npm run migration:run
```

6. Seed db

```bash
npm run dev:seed
```

6. Run the back-end in a development environment:

```bash
npm run dev
```

## How to run tests

1. Follow the steps in the last section
1. Configure the `.env.test` file using the `.env.example` file (see "Running application locally or inside docker" section for details)
1. Run all migrations

```bash
npm run migration:run
```

3. Run test:
   (locally)

```bash
npm run test
```

(docker)

```bash
npm run test:docker
```

## Building and starting for production

```bash
npm run build
npm start
```

## Running migrations or generate prisma clients

Before running migrations make sure you have a postgres db running based on `.env.development` or `.env.test` file for each environment. You can start a postgres instance by typing `npm run dev:postgres` or `npm run test:postgres`. The host name is the name of the postgres container inside docker-compose file if you are running the application inside a docker container or localhost if you are running it locally.

You can operate on databases for different environments, but it is necessary to populate correct env variables for each environment first, so in order to perform db operations type the following commands:

- `npm run dev:migration:run` - run migrations for development environment by loading envs from .env.development file. It uses [dotenv-cli](https://github.com/entropitor/dotenv-cli#readme) to load envs from .env.development file.
- `npm run test:migration:run` - the same, but for test environment

- `npm run dev:migration:generate -- --name ATOMIC_OPERATION_NAME` - generate and run migration and prisma client for development environment by loading envs from .env.development file. Replace `ATOMIC_OPERATION_NAME` by the name of the migration you want to generate.

## Switching between environments

In order to switch between development and test environments you need to shutdown the current postgres instance if it is running and start the new one.

If you are in development environment:

```bash
npm run dev:postgres:down
```

And then

```bash
npm run test:postgres
```

If you are in test environment:

```bash
npm run test:postgres:down
```

And then

```bash
npm run dev:postgres
```

## Running application locally or inside docker

`.env.development` and `.env.test` must be changed if you and to run the application locally or inside docker. You can populate files based on `.env.example` file, but you need to consider the following:

- Running application locally (postgres and node):

Add your postgres credentials and make sure to create given database before running the application.

- Running application inside docker (postgres and node):

Set `POSTGRES_HOST` to `drivent-postgres-development` for `.env.development` and `drivent-postgres-test` for `.env.test` file. It is the name of the postgres container inside docker-compose file. Docker Compose will start the postgres container for you, create the database and host alias for you.

- Running application locally (node) but postgres is running inside docker:

Set `POSTGRES_HOST` to `localhost` for `.env.development` and `localhost` for `.env.test` file. Docker compose is configured to expose postgres container to your localhost.

## What to do when add new ENV VARIABLES

There are several things you need to do when you add new ENV VARIABLES:
- Add them to `.env.example` file
- Add them to your local `.env.development` and `.env.test` files
- Add them to your docker-compose.yml file (just the name, not the value). Only envs listed in the environment section will be exposed to your docker container.
- Add them (prod version) to your github repo secrets. They will be used to generate the `.env` file on deploy.
- Add them (prod version) to test.yml file on .github/workflows/test.yml.