const router = require ("express").Router();
const { showMovies, searchByPopularity, searchByNewest, showUpcoming } = require("../controllers/MovieController.js");


router.get('/showMovies', showMovies);
router.get('/showMoviesPopularity', searchByPopularity);
router.get('/showMoviesNewest', searchByNewest);
router.get('/showUpcoming', showUpcoming);

module.exports = router;