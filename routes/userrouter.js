const router = require ("express").Router();
const UserController = require("../controllers/usercontroller");

///MIDDLEWARE
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const checkadult = require ("../middleware/checkadult");



router.get('/users', UserController.getAll) //CHECKED

router.post('/user/register', UserController.Register); // CHECkED
router.post('/user/login', UserController.Login); //CHECKED
router.post('/user/logout', auth, UserController.Logout); // CHECKED

router.delete('/user/delete/:id', auth, admin, UserController.Delete); // CHECKED

//router.get('/user/Profile', UserController.Profile);

module.exports = router;