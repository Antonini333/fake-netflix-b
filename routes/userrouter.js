
const router = require ("express").Router();
const UserController = require("../controllers/usercontroller");

router.post('/user/register', UserController.Register);
router.post('/user/login', UserController.Login);
router.post('/user/logout', UserController.Logout);
router.delete('/user/delete', UserController.Delete);
router.get('/user/Profile', UserController.Profile);

module.exports = router;