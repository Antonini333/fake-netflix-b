const router = require ("express").Router();
const UserController = require("../controllers/usercontroller");


//              --MIDDLEWARE--
const auth = require("../middleware/auth"); //Checked
const admin = require("../middleware/admin"); // Checked
const checkadult = require ("../middleware/checkadult"); // Checked


//                --RUTAS--
router.get('/users', UserController.GetAll) // Checked

router.post('/user/register', UserController.Register); // Checked
router.post('/user/login', UserController.Login); //Checked
router.post('/user/logout', auth, UserController.Logout); // Checked

router.delete('/user/delete', auth, admin, UserController.Delete); // Checked



//router.get('/user/Profile', UserController.Profile);  ¿ES NECESARIA?

module.exports = router;