# ¿Qué es? 👀

Es un fake de Netflix hecho entre [Javier Garcia](https://github.com/javigarcias), [Rosa Sabater](https://github.com/RosaSabater) y [Pablo Antonini](https://github.com/Antonini333) que usa:

- Frontend: 🌌 [Link al repo](https://github.com/javigarcias/fake-netflix-f)
- Backend: 🔸 NodeJS + Express + Mongoose + Json Web Token + Bcrypt
- DB: 🍃 MongoDB 

Durante el desarrollo hemos usado [este tablón de Trello](https://trello.com/b/8T6U3vMQ/app-netflix-fake).


<br>


## Importar de API a MongoDB

La carpeta `Debug` guarda un archivo de un único uso `getDataFromApi`.
<br>Importa 10000 películas de la API a la base de datos.

<br>

- Todas las llamadas devuelven un máximo de 30 películas.

## /showMovies

**Método**: GET
<br>**Descripción**: Devuelve todas las películas. 

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
<br>**Descripción**: Devuelve las películas más populares de todas las películas en base de datos.

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
<br>**Descripción**: Devuelve las películas más recientes de todas las películas en base de datos.

<br>

## /showMoviesOldest

**Método**: GET
<br>**Descripción**: Devuelve las películas más antiguas de todas las películas en base de datos.

<br>

## /showUpcoming

**Método**: GET
<br>**Descripción**: Devuelve las películas que van a estrenarse próximamente.

<br>

## /searchByTitle?title=TÍTULOPELÍCULA

**Método**: GET
<br>**Descripción**: Devuelve las películas cuyo título sea el mismo o parecido al escrito.

<br>

## /searchById?id=NÚMEROIDPELÍCULA

**Método**: GET
<br>**Descripción**: Devuelve las películas cuya id sea la misma a la escrita.

<br>

## /searchByGenre?genre=NÚMEROIDGÉNERO

**Método**: GET
<br>**Descripción**: Devuelve las películas cuyo array de géneros contenga la id dada.


<br>



## Controles de Usuario

Nuestro backend provee una serie de endpoints con los que gestionar los datos del usuario.


## user/register

**Método**: POST
<br>**Descripción**: Una vez rellenados los campos requeridos (Name, surname, age, email, password, address, credit_card y role), se registrará al usuario en nuestra base de datos con la contraseña encriptada, para mayor seguridad.

**Body de ejemplo**:

    - "name": "Elon",
    - "surname": "Musk",
    - "age": "49", 
    - "email":"elon@gmail.com",
    - "password": "1234abc!",
    - "address": "Main Street, 8",
    - "credit_card": "40608179897966452", 
    - "role": "admin"
    
<br>

## user/login

**Método**: POST
<br>**Descripción**: Una vez rellenados los campos requeridos (email y password), son devueltos los datos completos del usuario previamente registrado. También se añade un token único a cada usuario para futuros accesos a las rutas restringidas.

**Body de ejemplo**:
   - "email":"elon@gmail.com",
    - "password": "1234abc!",

<br>

**Respuesta del body**:

    - "role": "admin",
    - "name": "Elon",
    - "surname": "Musk",
    - "age": 49,
    - "email": "elon@gmail.com",
    - "password": "$2a$09$OIL5xa5cIZd6rkuPmMVPceImH0BpqzskHwZlfMyRr8Ja6FyQ1f45.",
    - "address": "Main Street, 8",
    - "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTFjNjJlYTFjMDc2NDI4MTE2OTA5ZCIsImlhdCI6MTYwNDQzNzU2OCwiZXhwIjoxNjA3MDI5NTY4fQ.Dbnh9ZaHupxeIHxEdr3xb5sLGLEYNfQjGDlAV2FIHOI",
    - "credit_card": 40608179897966450
<br>

## user/logout

**Método**: POST
<br>**Descripción**: Este endpoint destruye el token de usuario, negando acceso a todas las rutas restringidas.
Al volver a logearse se consigue un nuevo token.

<br>

## user/delete

**Método**: DELETE
<br>**Descripción**: Este endpoint destruye los datos del usuario de la base de datos.


<br>



## Controles de Pedido

Nuestro backend provee una serie de endpoints con los que gestionar los pedidos.

## order/rent

**Método**: PUT
<br>**Descripción**: Este endpoint crea el pedido pasandole por el body el id de la película. Genera un pedido con la fecha de alquiler y automáticamente nos indica la fecha de devolución dos dias después. El pedido incluye el objeto completo del usuario y la movie. Para ello, es necesario que el usuario esté logeado.

**Body de ejemplo**:
   - "movieId": 741074
    
<br>

## order/showAll

**Método**: GET
<br>**Descripción**: Este endpoint nos muestra todos los pedidos creados. Para ello, es necesario que el usuario tenga el rol de Admin y este logeado.
    
<br>

## order/showUser

**Método**: GET
<br>**Descripción**: Este endpoint nos muestra todos los pedidos creados del usuario logueado.
    
<br>

## order/cancelOrder

**Método**: DELETE
<br>**Descripción**: Este endpoint elimina un pedido introduciendo por parametros el _id del pedido, parra ello el usuario tiene que estar logueado.
    
<br>

## order/extendOrder

**Método**: PUT
<br>**Descripción**: Este endpoint nos añade los dias de extensión del alquiler que deseemos. Hay que pasarlos por body y para ello tendremos que estar logueados.

**Body de ejemplo**:
   - "days": 2
    
<br>
