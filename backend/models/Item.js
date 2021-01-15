const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    name: String,
    picture: String,
    inStock: Boolean,
    price: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

ItemSchema.plugin(uniqueValidator, {
  message: "{PATH} has already exists.",
});

mongoose.model("Item", ItemSchema);
