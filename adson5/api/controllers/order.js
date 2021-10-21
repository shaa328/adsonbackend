const Order = require('../models/order');
const mongoose = require('mongoose');

exports.orders_get_all =  (req, res, next) => {
    Order.find()
    .populate("product", "name")
    
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            orders: docs
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    });
}
exports.orders_create_order = (req, res, next) => {
    const order = new Order({
        order:req.body.product,
        image:req.files[0].path
    })
    order.save()
                .then(result => {
                console.log(result);
                res.status(201).json({
                   message:'Order stored'
             })
        })
        .catch(err=>{
             res.status(500).json({
                message: err
            });
        })
}
exports.orders_get_order = (req, res, next) => {
    Order.findById(req.params.orderId)
    
    .exec()
    .then(order => {
        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }
        res.status(200).json({
            order: order
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}
exports.orders_delete_order = (req, res, next) => {
    Order.deleteOne({_id: req.params.orderId})
    .exec()
    .then(result =>{
        res.status(200).json({
            message: "Order deleted",
            
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}