const router = require ("express").Router();
const { showMovies, searchByPopularity, searchByNewest, showUpcoming, searchByTitle } = require("../controllers/moviecontroller");


router.get('/showMovies', showMovies);
router.get('/showMoviesPopularity', searchByPopularity);
router.get('/showMoviesNewest', searchByNewest);
router.get('/showUpcoming', showUpcoming);
router.get('/searchByTitle', searchByTitle);
// router.get('/searchById', searchById);





module.exports = router;