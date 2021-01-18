const mongoose = require("mongoose");
const router = require("express").Router();
const validator = require("validator");
const fs = require("fs");
const auth = require("../../middleware/auth");
const FoodItem = mongoose.model("FoodItem");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} ${file.originalname}`);
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
router.post(
  "/create",
  auth.required,
  upload.single("picture"),
  (req, res, next) => {
    const foodItem = new FoodItem({
      name: req.body.name,
      picture: req.file.path,
      price: req.body.price,
      category: req.body.category,
      inStock: req.body.inStock,
      foodType: req.body.foodType,
      userCreated: req.payload.id,
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
  }
);

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
 * PUT /users/account
 * Update account information.
 */
router.put(
  "/:foodItemId",
  auth.required,
  upload.single("picture"),
  (req, res, next) => {
    FoodItem.findById(req.params.foodItemId)
      .then((foodItem) => {
        if (!foodItem) {
          return res.sendStatus(401);
        }

        // only update fields that were actually passed...
        // sorry for repeating code
        if (typeof req.body.name !== "undefined") {
          foodItem.name = req.body.name;
        }
        if (typeof req.body.picture !== "undefined") {
          foodItem.picture = req.body.picture;
        }
        if (typeof req.body.price !== "undefined") {
          foodItem.price = req.body.price;
        }
        if (typeof req.body.category !== "undefined") {
          foodItem.category = req.body.category;
        }
        if (typeof req.body.inStock !== "undefined") {
          foodItem.inStock = req.body.inStock;
        }
        if (typeof req.body.foodType !== "undefined") {
          foodItem.foodType = req.body.foodType;
        }

        return foodItem.save().then((foodItem) => {
          return res.json({ foodItem: foodItem.toJSON() });
        });
      })
      .catch(next);
  }
);

/**
 * DELETE :foodItemId
 * Delete a Food Item.
 */
router.delete("/:foodItemId", auth.required, (req, res, next) => {
  FoodItem.findOneAndDelete({ _id: req.params.foodItemId })
    .then((docs) => {
      fs.unlinkSync(`./${docs.picture}`);
      return res.json({ message: "food item deleted successfully." });
    })
    .catch(next);
});

module.exports = router;
