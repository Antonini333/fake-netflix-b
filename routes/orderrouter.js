const router = require("express").Router();
const OrderController = require('../controllers/ordercontroller');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');



router.post('/order/rent', auth, OrderController.rent);
router.get('/order/show',auth, admin, OrderController.showAll);
router.get('/order/show/:userId', auth, OrderController.showUser);
router.delete('/order/:orderId', auth, OrderController.cancelOrder);
router.put('/order/', auth, OrderController.extendOrder);


module.exports = router;