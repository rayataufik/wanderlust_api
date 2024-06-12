const Item = require('../models/content');

exports.index = async (req, res) => {
  const { data, error } = await Item.getItems();
  if (error) {
    res.status(500).json({ message: "Error while retrieving items", error });
  } else {
    res.status(200).json({
      message: "Items retrieved successfully",
      data
    });
  }
};

exports.show = async (req, res) => {
  const id = req.params.id;
  const { data, error } = await Item.getItemById(id);
  if (error) {
    res.status(500).json({ message: "Error while retrieving the item", error });
  } else if (data) {
    res.status(200).json({
      message: "Item retrieved successfully",
      data
    });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

exports.create = async (req, res) => {
  const { title, image_url, description } = req.body;
  const { data, error } = await Item.createItem({ title, image_url, description });
  if (error) {
    res.status(500).json({ message: "Failed to create item", error });
  } else {
    res.status(201).json({
      message: "Item created successfully",
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const { title, image_url, description } = req.body;
  const { data, error } = await Item.updateItem(id, { title, image_url, description });
  if (error) {
    res.status(500).json({ message: "Failed to update item", error });
  } else {
    res.status(200).json({
      message: "Item updated successfully"
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  const { data, error } = await Item.deleteItem(id);
  if (error) {
    res.status(500).json({ message: "Failed to delete item", error });
  } else {
    res.status(200).json({
      message: "Item deleted successfully"
    });
  }
};