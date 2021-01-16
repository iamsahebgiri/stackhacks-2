const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const FoodItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "name can't be blank"]
    },
    picture: String,
    inStock: {
      type: Boolean,
      default: true,
    },
    price: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

FoodItemSchema.plugin(uniqueValidator, {
  message: "{PATH} has already exists.",
});

FoodItemSchema.methods.toJSON = function () {
  return {
    id: this._id,
    name: this.name,
    picture: this.picture,
    inStock: this.inStock,
    price: this.price,
    category: this.category
  };
};

mongoose.model("FoodItem", FoodItemSchema);
