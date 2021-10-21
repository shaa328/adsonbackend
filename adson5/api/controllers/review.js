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