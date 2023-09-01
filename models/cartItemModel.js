const mongoose = require("mongoose");

// Task 3: Cart Item Model
const cartItemSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, required: true, min: 1 },
  },
  { timestamps: true, versionKey: false }
);
const CartItem = mongoose.model("CartItem", cartItemSchema);
module.exports = CartItem;
