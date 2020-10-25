# Vitta Test

This project is a code test for [Vitta](https://vitta.com.br/) company.

<p>
	<img src="https://vitta.com.br/wp-content/uploads/2019/09/Azul-Horizontal-3.png" align="right" width="200px">
</p>

## Front End

Nuxt.js SPA with lists and info about medicines appliements.

## Back End

NestJs application with Docker and MySQL. This REST API bulks data to db and feed paginated information to the front end application.

## How to Run

You need to have [NPM](https://www.npmjs.com/) and [NodeJS](https://nodejs.org/en/) property installed on machine.
[Docker](https://www.docker.com/) needs to be installed and running.

### Install all depedencies

```bash
npm run install
```

### Run 🔥

```bash
npm run start
```

Logic for correct initialization all maded ✨
The api waits for database to start and the front-end waits api (thanks [wait-on](https://www.npmjs.com/package/wait-on))

Front will start at [**:3000**](http://locahost:3000), back end at **:8080** and db in **3306**
