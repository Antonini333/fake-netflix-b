const router = require ("express").Router();
const { showMovies, searchByPopularity, searchByNewest, showUpcoming, searchByTitle, searchById, searchByGenre, searchByOldest } = require("../controllers/moviecontroller");



const auth = require("../middleware/auth");

router.get('/showMovies', showMovies);
router.get('/showMoviesPopularity', auth, searchByPopularity);
router.get('/showMoviesNewest', auth, searchByNewest);
router.get('/showMoviesOldest', auth, searchByOldest);
router.get('/showUpcoming', auth, showUpcoming);
router.get('/searchByTitle', auth, searchByTitle);
router.get('/searchById', auth, searchById);
router.get('/searchByGenre', auth, searchByGenre);





module.exports = router;