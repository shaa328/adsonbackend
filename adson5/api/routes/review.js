const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/check-auth');
const checkAdmin = require('../middlewares/check-admin')
const reviewController = require('../controllers/review')
router.get('/' , reviewController.getAllReviews );
router.post('/' , reviewController.review_post);
// router.get('/:orderId' , OrderController.orders_get_order);
// router.delete('/:orderId' ,OrderController.orders_delete_order );
module.exports = router;



const Review = require ('../models/review');
const mongoose = require('mongoose');
exports.getAllReviews = (req,res,next)=>{
    Review.find()
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            reviews: docs
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    });
}
exports.review_post = (req,res,next)=>{
    const review = new Review({
        review : req.body.review,
        rating : req.body.rating,
        
    })
    review.save()
                .then(result => {
                console.log(result);
                res.status(201).json({
                  createdReview : result
             })
        })
        .catch(err=>{
             res.status(500).json({
                message: err
            });
        })
}
