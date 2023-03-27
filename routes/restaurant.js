import express from "express";
import {
  createRestaurant,
  getAllRestaurants,
  getCategoriedRestaurants,
  getRestaurant,
} from "../controllers/controller.restaurant.js";

const router = express.Router();

// READ
router.get("/:id", getRestaurant);
router.get("/categories/:categories", getCategoriedRestaurants);
router.get("/", getAllRestaurants);
router.post("/", createRestaurant);

export default router;
