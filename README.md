# Vita Test

This project is a code test for [Vitta](https://vitta.com.br/) company.

<p>
	<img src="https://vitta.com.br/wp-content/uploads/2019/09/Azul-Horizontal-3.png" align="right" width="200px">
</p>

## Front End

Nuxt.js application with lists and info about medicines appliements.

## Back End

NestJs application with Docker and MySQL. This REST API bulks data to db and feed paginated information to the front end application.

## How to Run

You need to have [Docker](https://www.docker.com/), [NPM](https://www.npmjs.com/) and [NodeJS](https://nodejs.org/en/) property installed on machine.

**Install all depedencies**

```bash
npm run install
```

**Run 🔥**

```bash
npm run start
```

Back-end waits for database, front-end waits back-end, logic for correct initialization all maded ✨.

Front will start at **:3000**, back end at **:8080** and db in **3306**.
