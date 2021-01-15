const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    item: {type: mongoose.Schema.Types.ObjectId, ref: "Item"},
    whoOrdered: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    estimatedTime: {
      type: Number,
      default: 2,
    },
    status: {
      type: String,
      enum: ["pending", "preparing", "finished"],
      default: "pending",
    },
  },
  { timestamps: true }
);

ItemSchema.plugin(uniqueValidator, {
  message: "{PATH} has already exists.",
});

mongoose.model("Item", ItemSchema);
