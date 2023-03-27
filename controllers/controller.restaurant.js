import Restaurant from "../models/Restaurant.js";

// CREATE
export const createRestaurant = async (req, res) => {
  try {
    const {
      name,
      desc,
      map,
      image,
      categories,
      minPrice,
      maxPrice,
      isOpen,
      rating,
    } = req.body;
    const newRestaurant = new Restaurant({
      name,
      desc,
      map,
      image: req.file.path,
      categories,
      minPrice,
      maxPrice,
      isOpen,
      rating,
    });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// READ
export const getRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurants = await Restaurant.findById(id);
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCategoriedRestaurants = async (req, res) => {
  try {
    const { categories } = req.params;
    const restaurants = await Restaurant.find({ categories });
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
