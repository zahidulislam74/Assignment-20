const mongoose = require("mongoose");

// Task 1: User Model
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: String,
    phoneNumber: String,
  },
  { timestamps: true, versionKey: false }
);

// Set up cascading deletions
userSchema.pre("remove", async function (next) {
  // Remove user's cart items
  await mongoose.model("CartItem").deleteMany({ user: this._id });

  // Remove user's orders
  await mongoose.model("Order").deleteMany({ user: this._id });

  next();
});

// Create models
const User = mongoose.model("User", userSchema);

module.exports = { User, Product, CartItem, Order };
