
const router = require ("express").Router();
const UserController = require("../controllers/usercontroller");

router.get('/users', UserController.getAll)

router.post('/user/register', UserController.Register); // CHECkED
router.post('/user/login', UserController.Login); //CHECKED
router.post('/user/logout', UserController.Logout); // CHECKED

router.delete('/user/delete/:id', UserController.Delete); // En vez de eliminar, cambia los valores a null

//router.get('/user/Profile', UserController.Profile);

module.exports = router;