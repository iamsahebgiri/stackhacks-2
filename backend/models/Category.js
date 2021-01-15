const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

CategorySchema.plugin(uniqueValidator, {
  message: "{PATH} has already exists.",
});

mongoose.model("Category", CategorySchema);
