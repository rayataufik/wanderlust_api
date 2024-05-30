const Item = require('../models/content');

exports.index = (req, res) => {
  Item.getItems((err, results) => {
    if (err) {
      res.status(500).json({ message: "Error while retrieving items", error: err });
    } else {
      res.status(200).json({
        message: "Items retrieved successfully",
        data: results
      });
    }
  });
};

exports.show = (req, res) => {
  const id = req.params.id;
  Item.getItemById(id, (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error while retrieving the item", error: err });
    } else if (results.length > 0) {
      res.status(200).json({
        message: "Item retrieved successfully",
        data: results[0]
      });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  });
};
