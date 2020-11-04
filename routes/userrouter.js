
const router = require ("express").Router();
const UserController = require("../controllers/usercontroller");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");



router.get('/users', UserController.getAll) //CHECKED

router.post('/user/register', UserController.Register); // CHECkED
router.post('/user/login', UserController.Login); //CHECKED
router.post('/user/logout', auth, UserController.Logout); // CHECKED

router.delete('/user/delete/:id', auth, admin, UserController.Delete); // CHECKED

//router.get('/user/Profile', UserController.Profile);

module.exports = router;