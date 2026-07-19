const Order = require("../models/Order");

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const { user, product, quantity, totalPrice } = req.body;

    const order = await Order.create({
      user: req.user ? req.user.id : user,
      product,
      quantity: quantity || 1,
      totalPrice,
      status: "Pending",
    });

    res.status(201).json({
      message: "Order Created Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("product");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Order
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate("product");

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Order
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Order Updated Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Order
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Order Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};