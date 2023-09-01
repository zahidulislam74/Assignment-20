const mongoose = require("mongoose");
// Task 4: Order Model
const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    totalAmount: { type: Number, required: true, min: 0 },
    shippingAddress: { type: String, required: true },
    status: { type: String, required: true, default: "Pending" },
  },
  { timestamps: true, versionKey: false }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
