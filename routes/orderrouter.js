const router = require("express").Router();
const OrderController = require('../controllers/ordercontroller');


router.post('/order/rent', OrderController.rent);
router.get('/order/show', OrderController.showAll);
//router.get('/order/show/:userId', showUser);
//router.delete('/order/:orderId', cancelOrder);


module.exports = router;