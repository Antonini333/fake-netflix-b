const router = require ("express").Router();
const { showMovies, searchByPopularity, searchByNewest, showUpcoming, searchByTitle, searchById, searchByGenre, searchByOldest } = require("../controllers/moviecontroller");



const auth = require("../middleware/auth");

router.get('/showMovies', showMovies);
router.get('/showMoviesPopularity', searchByPopularity);
router.get('/showMoviesNewest', searchByNewest);
router.get('/showMoviesOldest', searchByOldest);
router.get('/showUpcoming', showUpcoming);
router.get('/searchByTitle', searchByTitle);
router.get('/searchById', searchById);
router.get('/searchByGenre', searchByGenre);





module.exports = router;