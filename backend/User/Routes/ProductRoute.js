const express = require("express");
const router = express.Router();
const ProductModal = require("../Modals/ProductModal");

router.post("/", (req, res) => {
  ProductModal.create(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/quantity", (req, res) => {
  ProductModal.find({ _id: req.body._id })
    .then((Product) => {
      ProductModal.updateOne(
        { _id: Product[0]._id },
        { quantity: req.body.quantity }
      )
        .then(() => {
          ProductModal.find({ _id: req.body._id })
            .then((data) => {
              res.status(200).send(data);
            })
            .catch((err) => {
              res.status(400).send(err);
            });
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/", (req, res) => {
  ProductModal.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/:id", (req, res) => {
  ProductModal.find({ _id: req.params.id })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
