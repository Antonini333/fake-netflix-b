const router = require("express").Router();
const OrderController = require('../controllers/ordercontroller');


router.post('/order', rent);
//router.get('/order/show', showAll);
//router.get('/order/show/:userId', showUser);
//router.delete('/order/:orderId', cancelOrder);


module.exports = router;