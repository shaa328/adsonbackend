const Product = require('../models/products');
const mongoose = require("mongoose");

exports.get_all = (req, res, next) => {
    Product.find()
      .exec()
      .then(docs => {
        console.log(docs);
        //   if (docs.length >= 0) {
        res.status(200).json(docs);
        //   } else {
        //       res.status(404).json({
        //           message: 'No entries found'
        //       });
        //   }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }

  exports.post = (req, res, next) => {
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price,
      image:req.files[0].path
    });
    product
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /products",
          createdProduct: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }



  exports.get_by_id =  (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }

  exports.update = (req, res, next) => {
    const id = req.params.productId
    if(id.length === 24){//req.body is not iterable
    Product.findById(id)
    .exec()
    .then(result =>{
        if(!result){
            res.status(400).json({
                message:"item not found"
            })
        } else {
            const update = req.body
            Product.findByIdAndUpdate(id,update)
            .exec()
            .then(updatedVersion =>{
                console.log(updatedVersion);
                res.status(200).json({
                    message : " item has been Updated",
                    result : updatedVersion
                })
            })
        }
    })
} else {
    res.status(400).json({
        message : "Invalid id"
    })
}
  }


  exports.delete =  (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }


