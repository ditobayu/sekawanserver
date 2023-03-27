import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema(
  {
    name: String,
    desc: String,
    map: String,
    image: String,
    categories: String,
    minPrice: Number,
    maxPrice: Number,
    isOpen: Boolean,
    rating: Array,
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
