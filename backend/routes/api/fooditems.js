const mongoose = require("mongoose");
const router = require("express").Router();
// const validator = require("validator");
const auth = require("../../middleware/auth");
const FoodItem = mongoose.model("FoodItem");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}  ${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
  fileFilter: fileFilter,
});

/**
 * POST /fooditems/create
 * Create a food item.
 */
// TODO: add auth.required
router.post("/create", upload.single("picture"), (req, res, next) => {
  
    const foodItem = new FoodItem({
    name: req.body.name,
    picture: req.file.path,
    price: req.body.price,
    category: req.body.category,
  });

  foodItem
    .save()
    .then((savedFoodItem) => {
      savedFoodItem
        .populate("category")
        .execPopulate()
        .then((popudatedFoodItem) => {
          return res.json({ foodItem: popudatedFoodItem });
        });
    })
    .catch(next);
});

/**
 * GET /fooditems/
 * Get all fooditems.
 */
router.get("/", (req, res, next) => {
  FoodItem.find()
    .populate("category")
    .then((foodItems) => {
      return res.json({ foodItems });
    })
    .catch(next);
});

/**
 * DELETE :foodItemId
 * Delete a Food Item.
 */
router.delete("/:foodItemId", (req, res, next) => {
  FoodItem.deleteOne({ _id: req.params.foodItemId })
    .then(() => {
      return res.json({ message: "food item deleted successfully." });
    })
    .catch(next);
});

module.exports = router;
