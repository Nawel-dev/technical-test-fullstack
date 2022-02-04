# Dougs technical test for fullstack developers

## Guides
### Install project dependencies

Run `npm install`.

### Start API

You have two choices to start the API :
- `npm run start` : starts the API without watch mode,
- `npm run start:watch` : starts the API in watch mode.

## Technical stack

### Framework

This project uses [NestJS Framework](https://nestjs.com/).

### Data persistence

This project uses [SQLite](https://www.sqlite.org/index.html) a file-based data storage that uses a simplified SQL-like querying language.

### ORM

This project uses [TypeORM](https://typeorm.io/#/).


### End Point : liste des ecritures comptables de l'année 2020 pour le client 8 : localhost:3000/accounting-lines/8/2020-01-01T00:00:00/2021-01-01T00:00:00/find
### End Point: Somme des écritures comptables de l'année 2020 pour le client 8 : localhost:3000/accounting-lines/8/2020-01-01T00:00:00/2021-01-01T00:00:00/sum
