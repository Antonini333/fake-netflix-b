const router = require("express").Router();
const OrderController = require('../controllers/ordercontroller');


router.post('/order/rent', OrderController.rent);
router.get('/order/show', OrderController.showAll);
router.get('/order/show/:userId', OrderController.showUser);
router.delete('/order/:orderId', OrderController.cancelOrder);
router.put('/order/', OrderController.extendOrder);


module.exports = router;