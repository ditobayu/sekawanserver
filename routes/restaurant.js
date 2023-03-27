import express from "express";
import multer from "multer";
import {
  createRestaurant,
  getAllRestaurants,
  getCategoriedRestaurants,
  getRestaurant,
} from "../controllers/controller.restaurant.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, res, cb) => {
    cb(null, res.originalname);
  },
});
const upload = multer({ storage });

// READ
router.get("/:id", getRestaurant);
router.get("/categories/:categories", getCategoriedRestaurants);
router.get("/", getAllRestaurants);
router.post("/", upload.single("image"), createRestaurant);

export default router;
