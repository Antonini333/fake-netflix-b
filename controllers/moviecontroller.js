const mongoose = require('mongoose');
const MovieModel = require('../models/Movie');


const showMovies = async (req, res) => {

    try {
        let query = req.query;
        let limit = parseInt(query.limit);

        // el limit es el número que va al final de la url de PseudoPostman
        // si no hay limit o el limite es mayor o igual a 30, se mantiene en 30
        if (!limit || limit >= 30) {
            limit = 30
        };

        let movies = await MovieModel.find().limit(limit);

        res.send(movies)

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'No se han podido mostrar todas las películas.' });
    }
};


const searchByPopularity = async (req, res) => {

    try {
        let query = req.query;
        let limit = parseInt(query.limit);

        if (!limit || limit >= 30) {
            limit = 30
        };

        // busco todas las peliculas, y las ordeno por popularity con .sort
        let movies = await MovieModel.find()
            .sort({
                popularity: -1
            })
            .limit(limit);

        res.send(movies)


    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'No se han podido mostrar las películas más populares.' });
    }
};


const searchByNewest = async (req, res) => {

    try {
        let query = req.query;
        let limit = parseInt(query.limit);

        if (!limit || limit >= 30) {
            limit = 30
        };

        // busco todas las películas que 
        let movies = await MovieModel.find({
            release_date:
                { $lte: new Date() }
        })
            .sort({
                release_date: -1
            })
            .limit(limit);

        res.send(movies)

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'No se han podido mostrar las películas más recientes.' });
    }
};


const showUpcoming = async (req, res) => {

    try {
        let query = req.query;
        let limit = parseInt(query.limit);

        if (!limit || limit >= 30) {
            limit = 30
        };

        // busco todas las peliculas, y las ordeno por popularity con .sort
        let movies = await MovieModel.find({
            release_date:
                { $gte: new Date() }
        }).sort({
            release_date: -1
        }).limit(limit);

        res.send(movies)


    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'No se han podido mostrar los próximos estrenos.' });
    }
};


// const searchByActor = async (req, res) => {

//     try {


//     } catch (error) {
//         console.log(error)
//         res.status(500).send({ message: '' });
//     }
// };


// const searchByGenre = async (req, res) => {

//     try {


//     } catch (error) {
//         console.log(error)
//         res.status(500).send({ message: '' });
//     }
// };


// const searchByTitle = async (req, res) => {

//     try {


//     } catch (error) {
//         console.log(error)
//         res.status(500).send({ message: '' });
//     }
// };


// const searchById = async (req, res) => {

//     try {


//     } catch (error) {
//         console.log(error)
//         res.status(500).send({ message: '' });
//     }
// };


module.exports = { showMovies, searchByPopularity, searchByNewest, showUpcoming };
