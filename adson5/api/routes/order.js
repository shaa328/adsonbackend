const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/check-auth');
const checkAdmin = require('../middlewares/check-admin');
const orderimg = require('../middlewares/order-img')
const OrderController = require( '../controllers/order');
router.get('/' , checkAuth,  OrderController.orders_get_all );
router.post('/' , checkAuth, orderimg, OrderController.orders_create_order);
router.get('/:orderId' , checkAuth, OrderController.orders_get_order);
router.delete('/:orderId', checkAuth, OrderController.orders_delete_order );
module.exports = router;