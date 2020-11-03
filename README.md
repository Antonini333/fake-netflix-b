# ¿Qué es? 👀

Es un fake de Netflix hecho entre [Javier Garcia](https://github.com/javigarcias), [Rosa Sabater](https://github.com/RosaSabater) y [Pablo Antonini](https://github.com/Antonini333) que usa:

- Frontend: 🌌 
- Backend: 🔸 NodeJS + Express + Json Web Token + Bcrypt
- DB: 🍃 MongoDB 

Durante el desarrollo hemos usado [este tablón de Trello]().


<br>


## Importar de API a MongoDB

La carpeta `Debug` guarda un archivo de un único uso `getDataFromApi`.
<br>Importa 10000 películas de la API a la base de datos.

<br>

## /showMovies

**Método**: GET
<br>**Descripción**: Devuelve todas las películas con un máximo de 30. 

**Body**:

- "genre_ids": `Array`
Tipos de género de la película.
- "_id": `ObjectId`
Id de MongoDB.
- "popularity": `Number`
Popularidad de la película. Es un número pudiendo ser decimal.
- "poster_path": `String`
Imagen delantera de la película.
- "id": `Number`
Id de la película asignada en la API.
- "adult": `Boolean`
Filtro para adultos.
- "backdrop_path": `String`
Imagen trasera de la película.
- "title": `String`
Título de la película.
- "vote_average": `Number`
Valoración de la película.
- "overview": `String`
Breve descripción de la película.
- "release_date": `Date`
Fecha de salida de la película.

<br>

## /showMoviesPopularity

**Método**: GET
<br>**Descripción**: Devuelve las películas más populares de todas las películas en base de datos con un máximo de 30.

**Body de ejemplo**:

La película más popular es:

- "genre_ids": [28, 53],
- "_id": "5fa0528a8fec495aacf16316",
- "popularity": 3089.11,
- "poster_path": "/x7Dc6FTBYOfwMDEHSGW6EOitidk.jpg",
- "id": 724989,
- "adult": false,
- "backdrop_path": "/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg",
- "title": "Mercenarios de élite",
- "vote_average": 4.3,
- "overview": "El trabajo del multimillonario CEO de tecnología Donovan Chalmers es tan valioso que contrata mercenarios para protegerlo, y un grupo terrorista secuestra a su hija solo para conseguirlo.",
- "release_date": "2020-10-23T00:00:00.000Z"

<br>

## /showMoviesNewest

**Método**: GET
<br>**Descripción**: Devuelve las películas más recientes de todas las películas en base de datos con un máximo de 30.

<br>

## /showMoviesOldest

**Método**: GET
<br>**Descripción**: Devuelve las películas más antiguas de todas las películas en base de datos con un máximo de 30.

<br>

## /showUpcoming

**Método**: GET
<br>**Descripción**: Devuelve las películas que van a estrenarse próximamente con un máximo de 30.

<br>

## /searchByTitle?title=TÍTULOPELÍCULA

**Método**: GET
<br>**Descripción**: Devuelve las películas cuyo título sea el mismo o parecido al escrito con un máximo de 30.

<br>

## /searchById?id=IDPELÍCULA

**Método**: GET
<br>**Descripción**: Devuelve las películas cuya id sea la misma a la escrita con un máximo de 30.
